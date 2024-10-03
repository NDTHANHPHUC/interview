import React from 'react';
import Board from './components/Board';
import { Container, CssBaseline, Typography } from '@mui/material';

// kanbanboard using mui
const App: React.FC = () => {
  return (
    <Container>
      <CssBaseline />
      <Typography variant="h3" align="center" gutterBottom>
        Kanban Board
      </Typography>
      <Board />
    </Container>
  );
};

export default App;
