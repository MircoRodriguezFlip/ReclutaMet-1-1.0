import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/ReclutaMet-1-1.0',
    plugins: [react()],
});