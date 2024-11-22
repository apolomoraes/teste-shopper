interface AppErrorProps {
  message: string;
  statusCode: number;
}

export class AppError implements AppErrorProps {
  message;
  statusCode;

  constructor(message: string, statusCode: number = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}