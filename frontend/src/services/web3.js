// src/services/web3.js

import { ethers } from 'ethers';

export const connectToPolygon = async () => {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log('Connected to Polygon Network');
      return { provider, signer };
    } catch (error) {
      console.error('Failed to connect to Polygon:', error);
    }
  } else {
    console.error('Ethereum wallet not detected. Please install MetaMask.');
  }
};