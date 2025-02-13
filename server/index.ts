import express from "express";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

(async () => {
  // Set up static file serving
  if (app.get("env") === "development") {
    // In development, use Vite's dev server
    await setupVite(app);
  } else {
    // In production, serve the static files from the dist directory
    serveStatic(app);
  }

  // Serve the app on port 5000
  const PORT = 5000;
  app.listen(PORT, "0.0.0.0", () => {
    log(`serving on port ${PORT}`);
  });
})();