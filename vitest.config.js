import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  includeSources: ["vi"],
  test: {
    environment: "jsdom",
    globals: true,
  },
});
