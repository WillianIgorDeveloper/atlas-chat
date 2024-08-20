import path from "node:path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@pages": path.resolve(__dirname, "./src/presentation/pages"),
      "@layouts": path.resolve(__dirname, "./src/presentation/layouts"),
      "@middleware": path.resolve(__dirname, "./src/middleware"),
      "@ui": path.resolve(__dirname, "./src/presentation/components/ui"),
      "@composed": path.resolve(__dirname, "./src/presentation/components/composed"),
    },
  },
})
