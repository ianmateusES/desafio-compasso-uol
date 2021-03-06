import 'dotenv/config';
import 'reflect-metadata';
import 'express-async-errors';

import '@shared/infra/typeorm';
import '@shared/container';

import { errors } from 'celebrate';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from '../../../swagger.json';
import { AppError } from '../../errors/AppError';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(routes);

app.use(errors());

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.messege,
    });
  }

  console.log(err);

  return res.status(500).json({
    status: 'error',
    message: 'Insternal server error',
  });
});

export default app;
