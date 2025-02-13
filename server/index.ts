import { createServer } from "vite";

// Simple logger function that doesn't depend on Express
const log = (message: string) => {
  const time = new Date().toLocaleTimeString();
  console.log(`${time} [vite] ${message}`);
};

(async () => {
  if (process.env.NODE_ENV === "development") {
    const vite = await createServer({
      server: {
        port: 5000,
        host: "0.0.0.0",
      },
      appType: "spa",
    });

    await vite.listen();
    log(`Development server running on port 5000`);
  } else {
    // In production, static files will be served directly by the hosting platform
    log(`Production build ready for static file serving`);
  }
})();