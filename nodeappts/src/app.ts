import express, { Request, Response, NextFunction } from 'express';
import todoRoutes from './routes/todos';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.use('/todos', todoRoutes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    response.json(500).json({ message: error.message });
  }
);

app.listen(3000, () => {
  console.log('Port is running on the server 3000');
});
