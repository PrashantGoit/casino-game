// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Ensure you have this plugin installed

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Allow Vite to resolve these extensions
  },
});
