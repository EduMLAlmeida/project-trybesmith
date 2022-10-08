import { NextFunction, Request, Response } from 'express';
import HttpException from '../shared/http.exception';

export default (req: Request, _res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const message = 'Username or password invalid';

  if (!username) { throw new HttpException(400, '"username" is required'); }

  if (!password) { throw new HttpException(400, '"password" is required'); }

  if (typeof (username) !== 'string') { throw new HttpException(401, message); }

  if (typeof (password) !== 'string') { throw new HttpException(401, message); }

  next();
};