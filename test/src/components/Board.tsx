import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Grid, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import Column from './Column';
import { io } from 'socket.io-client';

interface Ticket {
  id: number;
  title: string;
  description: string;
  status: string;
}

const socket = io('http://localhost:5000'); 
const Board: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [newTicket, setNewTicket] = useState({ title: '', description: '', status: 'To Do' });
  const [open, setOpen] = useState(false);
  const columns = ['To Do', 'In Progress', 'Done'];

  useEffect(() => {
    // Fetch the tickets from the server
    axios.get('/api/tickets').then((response) => {
      setTickets(response.data);
    });

    socket.on('ticket_added', (ticket: Ticket) => {
      setTickets((prevTickets) => [...prevTickets, ticket]); // Add the new ticket
    });

    socket.on('ticket_updated', (updatedTicket: Ticket) => {
      setTickets((prevTickets) =>
        prevTickets.map((ticket) => (ticket.id === updatedTicket.id ? updatedTicket : ticket))
      ); // Update the ticket
    });

    socket.on('ticket_deleted', ({ id }: { id: number }) => {
      console.log(`Ticket with ID ${id} deleted`);
          const updatedTickets = [...tickets].filter((ticket) => ticket.id !== id);
      setTickets(updatedTickets); 
    });
    socket.on('connect_error', (err) => {
      console.error('Connection error:', err);
    });
        
    // Clean up the WebSocket connection when the component unmounts
    return () => {
      socket.off('ticket_added');
      socket.off('ticket_updated');
      socket.off('ticket_deleted');
    };
  }, []);

  // Handle add new ticket
  const handleAddTicket = () => {
    axios.post('/api/tickets', newTicket).then(() => {
      setOpen(false); 
      setNewTicket({ title: '', description: '', status: 'To Do' }); 
    });
  };

  // Handle ticket edit (moving between columns)
  const handleMoveTicket = (id: number, newStatus: string) => {
    axios.put(`/api/tickets/${id}`, { status: newStatus }).then(() => {});
  };

  // Handle removing a ticket
  const handleRemoveTicket = (id: number) => {
    axios.delete(`/api/tickets/${id}`).then(() => {});
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Button variant="contained" onClick={() => setOpen(true)} sx={{ marginBottom: 2 }}>
        Add Ticket
      </Button>

      <Grid container spacing={2}>
        {columns.map((column) => (
          <Grid item xs={12} sm={6} md={4} key={column}>
            <Column
              title={column}
              tickets={tickets.filter((ticket) => ticket.status === column)}
              onMoveTicket={handleMoveTicket}
              onRemoveTicket={handleRemoveTicket}
            />
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Ticket</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            fullWidth
            value={newTicket.title}
            onChange={(e) => setNewTicket({ ...newTicket, title: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Description"
            fullWidth
            value={newTicket.description}
            onChange={(e) => setNewTicket({ ...newTicket, description: e.target.value })}
          />
          
          {/* Select status for the ticket */}
          <FormControl fullWidth margin="dense">
            <InputLabel>Status</InputLabel>
            <Select
              label="Status"
              value={newTicket.status}
              onChange={(e) => setNewTicket({ ...newTicket, status: e.target.value })}
            >
              {columns.map((column) => (
                <MenuItem key={column} value={column}>
                  {column}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleAddTicket}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Board;
