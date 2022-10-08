import { NextFunction, Request, Response } from 'express';
import HttpException from '../shared/http.exception';

const httpErrorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.log('error', err);
  const { status = 500, message } = err as HttpException;
  res.status(status).json({ message });
};

export default httpErrorMiddleware;