import express from 'express';
import { routes } from './routes/index';

const app = express();
app.use(express.json());
app.use(routes);

app.listen(8080, () => {
  console.log(`Server is running on Port 8080`)
}) 