import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import HttpException from '../shared/http.exception';

const JWT_SECRET = 'secret';

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new HttpException(401, 'Token not found');
  }

  try {
    jwt.verify(authorization as string, JWT_SECRET);
    next();
  } catch (error) {
    throw new HttpException(401, 'Invalid token');
  }
};