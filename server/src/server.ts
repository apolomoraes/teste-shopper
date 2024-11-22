import express from 'express';
import { AppError } from './utils/AppError';
import { routes } from './routes/index';

const app = express();
app.use(express.json());
app.use(routes);

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  };

  console.error(error);

  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  });
});

app.listen(8080, () => {
  console.log(`Server is running on Port 8080`)
}) 