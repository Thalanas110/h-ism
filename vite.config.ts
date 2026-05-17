import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import netlify from "@netlify/vite-plugin-tanstack-start";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  environments: {
    // Vite 7 SSR dep optimization can try to prebundle TanStack Start
    // virtual modules before the plugin resolves them.
    ssr: {
      optimizeDeps: {
        noDiscovery: true,
      },
    },
  },
  optimizeDeps: {
    exclude: [
      "@tanstack/start-server-core",
      "#tanstack-router-entry",
      "#tanstack-start-entry",
      "#tanstack-start-plugin-adapters",
      "tanstack-start-manifest:v",
      "tanstack-start-injected-head-scripts:v",
    ],
    esbuildOptions: {
      external: [
        "#tanstack-router-entry",
        "#tanstack-start-entry",
        "#tanstack-start-plugin-adapters",
        "tanstack-start-manifest:v",
        "tanstack-start-injected-head-scripts:v",
      ],
    },
  },
  plugins: [
    tanstackStart({
      // Use src/server.ts for SSR error handling.
      server: { entry: "server" },
    }),
    netlify(),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
