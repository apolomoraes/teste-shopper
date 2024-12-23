import express from 'express';
import { routes } from './routes/index';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(8080, () => {
  console.log(`Server is running on Port 8080`)
}) 