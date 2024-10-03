import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import Ticket from './Ticket';

interface TicketProps {
  id: number;
  title: string;
  description: string;
  status: string;
}

interface ColumnProps {
  title: string;
  tickets: TicketProps[];
  onMoveTicket: (id: number, direction: 'forward' | 'backward') => void;
  onRemoveTicket: (id: number) => void;
}

const Column: React.FC<ColumnProps> = ({ title, tickets, onMoveTicket, onRemoveTicket }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        {tickets.map((ticket) => (
          <div key={ticket.id}>
            <Ticket key={ticket.id} {...ticket} />
            
            {/* Buttons to move tickets forward and backward */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 1 }}>
              {ticket.status !== 'To Do' && (
                <Button
                  onClick={() => onMoveTicket(ticket.id, 'backward')}
                  variant="contained"
                  color="secondary"
                  size="small"
                  sx={{ marginRight: 1 }}
                >
                  Return Ticket
                </Button>
              )}

           
              <Button
                onClick={() => onRemoveTicket(ticket.id)}
                variant="contained"
                color="error"
                size="small"
              >
                Delete
              </Button>

              {ticket.status !== 'Done' && (
                <Button
                  onClick={() => onMoveTicket(ticket.id, 'forward')}
                  variant="contained"
                  color="primary"
                  size="small"
                >
                  Progress Ticket
                </Button>
              )}
            </Box>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Column;
