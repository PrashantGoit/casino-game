// src/components/ConnectButton.jsx

import React from 'react';
import { Button } from '@mui/material';
import { connectToPolygon } from '../services/web3';

const ConnectButton = () => {
  const handleConnect = async () => {
    try {
      const connection = await connectToPolygon();
      console.log(connection);
    } catch (error) {
      console.error('Failed to connect:', error);
    }
  };

  return (
    <Button 
      variant="contained" 
      color="primary" 
      onClick={handleConnect}
    >
      Connect Wallet
    </Button>
  );
};

export default ConnectButton;