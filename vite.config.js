import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {},
    'import.meta.env': {},
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
    // Add the custom MIME type for JavaScript module files
    'process.env': { VITE_CUSTOM_MIME_JS_MODULE: 'application/javascript' },
  },
})
