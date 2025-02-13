import express from "express";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

(async () => {
  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app);
  } else {
    // In production, serve the static files from the dist directory
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client
  const PORT = 5000;
  const server = app.listen(PORT, "0.0.0.0", () => {
    log(`serving on port ${PORT}`);
  });
})();