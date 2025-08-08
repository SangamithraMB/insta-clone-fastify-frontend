import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

const baseURL = "https://insta-clone-fastify-backend.onrender.com/";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), react()],
  server: {
    proxy: {
      "/uploads": {
        target: baseURL,
        changeOrigin: true,
        secure: baseURL.startsWith("https"),
      },
    },
  },
});

