import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import exampleRoute from './routes/example.route';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware for JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// First custom example router
app.use('/example', exampleRoute);

// Main server route
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ res: 'Express + TypeScript Default Server' });
});

// Server start
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
