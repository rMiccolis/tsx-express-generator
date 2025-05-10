import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import exampleRoute from './routes/example.route';

dotenv.config()

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware per il parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// First custom example router
app.use('/example', exampleRoute)

// Route di esempio
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Default Server');
});

// Avvio del server
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});