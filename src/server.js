import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import chatRoutes from './routes/chatRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import { logger } from './middleware/logger.js';
import { errorHandler } from './utils/errorHandler.js';

dotenv.config();

export const setupServer = () => {
  const app = express();
  app.use(express.json());
  app.use(logger);

  app.use(errorHandler);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};
