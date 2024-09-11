// src/components/CasinoBoard.jsx

import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { DiceSimulation } from '../services/physicsService'; // Import the DiceSimulation component

const CasinoBoard = () => {
  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: '#2c3e50',
        minHeight: '100vh',
        color: '#ecf0f1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Langur Burja
      </Typography>
      {/* Include the Dice Simulation here */}
      <DiceSimulation />
      {/* Betting and other components follow */}
      {/* ... */}
    </Box>
  );
};

export default CasinoBoard;
