import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
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
  onMoveTicket: (id: number, newStatus: string) => void;
  onRemoveTicket: (id: number) => void;
}

const Column: React.FC<ColumnProps> = ({ title, tickets, onMoveTicket, onRemoveTicket }) => {
  const nextStatus = (status: string) => {
    if (status === 'To Do') return 'In Progress';
    if (status === 'In Progress') return 'Done';
    return '';
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        {tickets.map((ticket) => (
          <div key={ticket.id}>
            <Ticket key={ticket.id} {...ticket} />
            <Button
              onClick={() => onRemoveTicket(ticket.id)}
              variant="contained"
              color="secondary"
              size="small"
              sx={{ marginRight: 1 }}
            >
              Delete
            </Button>
            {nextStatus(ticket.status) && (
              <Button
                onClick={() => onMoveTicket(ticket.id, nextStatus(ticket.status))}
                variant="contained"
                color="primary"
                size="small"
              >
                Move to {nextStatus(ticket.status)}
              </Button>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Column;
