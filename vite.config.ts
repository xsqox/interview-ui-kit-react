import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ["lib"], insertTypesEntry: true })],
  content: [
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, "lib/main.ts"),
      name: "I-UI-Kit",
      formats: ["es", "umd"],
      fileName: "i-ui-kit",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "tailwindcss"],
    },
  },
  resolve: {
    alias: {
      "src": path.resolve(__dirname, "./src"),
      "lib": path.resolve(__dirname, "./lib"),
    },
  },
})

