import app from './app.js';
import client from './db/client.js';
import { seedEmployees } from './db/seed.js';

const PORT = process.env.PORT || 3000;

async function startServer() {
  await client.connect();
  await seedEmployees();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

startServer();