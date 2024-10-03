import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initializeDb } from './database';
import routes, { setSocketServer } from './routes'; 
import { createServer } from 'http';
import { Server } from 'socket.io';


dotenv.config();

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: '*', 
    methods: ['GET', 'POST']
  }
});

setSocketServer(io);

// Middleware
app.use(cors());
app.use(express.json());

// Attach the io instance to the app so routes can access it
app.set('io', io);

// API routes
app.use('/api', routes);

// Handle WebSocket connections
io.on('connection', (socket) => {
  console.log(`New WebSocket connection: ${socket.id}`);
  socket.on('disconnect', () => {
    console.log(`WebSocket disconnected: ${socket.id}`);
  });
});

// Initialize the database and start the http + ws server
initializeDb().then(() => {
  const PORT = process.env.PORT || 5000;
  httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
