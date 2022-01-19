import 'reflect-metadata';
import 'express-async-errors';
import '../shared/container';
import 'dotenv/config';

import express, { NextFunction, Request, Response } from 'express';

import { routes } from '../config/routes';
import * as database from '../database';
import { AppError } from '../error/AppError';

database.connect();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.code).json({ message: error.message });
    }
    return response.status(500).json({ message: 'Internal server error' });
    next();
  },
);

app.listen(port, () => {
  console.log(`Server now is running on link :: http://localhost:${port} 🏆`);
});
