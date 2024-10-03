import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface TicketProps {
  id: number;
  title: string;
  description: string;
  status: string;
}

const Ticket: React.FC<TicketProps> = ({ title, description }) => {
  return (
    <Card variant="outlined" style={{ marginBottom: '1rem', marginTop: '1rem' }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Ticket;
