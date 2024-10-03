import { Router } from 'express';
import { openDb } from './database';
import { Server } from 'socket.io';

const router = Router();
let io: Server;

// Attach the Socket.IO instance to the router (to be called in the main file)
export function setSocketServer(server: Server) {
  io = server;
}

// get all tickets
router.get('/tickets', async (req, res) => {
  try {
    const db = await openDb();
    const tickets = await db.all('SELECT * FROM tickets');
    await db.close();
    res.json(tickets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch tickets' });
  }
});

// Create a new ticket
router.post('/tickets', async (req, res) => {
  const { title, description, status } = req.body;

  try {
    const db = await openDb();
    const result = await db.run(
      'INSERT INTO tickets (title, description, status) VALUES (?, ?, ?)',
      [title, description, status]
    );
    const newTicket = await db.get('SELECT * FROM tickets WHERE id = ?', [result.lastID]);
    await db.close();

    // notify client
    io.emit('ticket_added', newTicket);

    res.status(201).json(newTicket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create ticket' });
  }
});

// Update ticket status
router.put('/tickets/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const db = await openDb();
    await db.run('UPDATE tickets SET status = ? WHERE id = ?', [status, id]);
    const updatedTicket = await db.get('SELECT * FROM tickets WHERE id = ?', [id]);
    await db.close();

    // Notify clients that a ticket has been updated
    io.emit('ticket_updated', updatedTicket);

    res.json(updatedTicket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update ticket' });
  }
});

// Delete a ticket
router.delete('/tickets/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const db = await openDb();
    await db.run('DELETE FROM tickets WHERE id = ?', [id]);
    await db.close();

    // Notify clients that a ticket has been deleted
    io.emit('ticket_deleted', { id });

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete ticket' });
  }
});

export default router;
