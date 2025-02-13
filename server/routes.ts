import type { Express } from "express";
import { createServer, type Server } from "http";

export function registerRoutes(app: Express): Server {
  // Create and return HTTP server for static file serving
  const httpServer = createServer(app);
  return httpServer;
}