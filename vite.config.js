import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        // 0.0.0.0 is the default value
        host: '0.0.0.0',
        // 3000 is the default value
        port: 3000,
    }
})
