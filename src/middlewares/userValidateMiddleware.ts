import { NextFunction, Request, Response } from 'express';
import HttpException from '../shared/http.exception';

const validateUserName = (userName: string) => {
  if (!userName) {
    throw new HttpException(400, '"username" is required');
  }

  if (typeof (userName) !== 'string') {
    throw new HttpException(422, '"username" must be a string');
  }

  if (userName.length < 3) {
    throw new HttpException(422, '"username" length must be at least 3 characters long');
  }
};

const validateClasse = (classe: string) => {
  if (!classe) {
    throw new HttpException(400, '"classe" is required');
  }

  if (typeof (classe) !== 'string') {
    throw new HttpException(422, '"classe" must be a string');
  }

  if (classe.length < 3) {
    throw new HttpException(422, '"classe" length must be at least 3 characters long');
  }
};

const validateLevel = (level: number) => {
  if (level < 1) {
    throw new HttpException(422, '"level" must be greater than or equal to 1');
  }

  if (!level) {
    throw new HttpException(400, '"level" is required');
  }

  if (typeof (level) !== 'number') {
    throw new HttpException(422, '"level" must be a number');
  }
};

const validatePassword = (password: string) => {
  if (!password) {
    throw new HttpException(400, '"password" is required');
  }

  if (typeof (password) !== 'string') {
    throw new HttpException(422, '"password" must be a string');
  }

  if (password.length < 8) {
    throw new HttpException(422, '"password" length must be at least 8 characters long');
  }
};

export default (req: Request, _res: Response, next: NextFunction) => {
  const { username, classe, level, password } = req.body;

  validateUserName(username);

  validateClasse(classe);

  validateLevel(level);

  validatePassword(password);

  next();
};