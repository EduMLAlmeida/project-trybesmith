import { NextFunction, Request, Response } from 'express';
import HttpException from '../shared/http.exception';

export default (req: Request, _res: Response, next: NextFunction) => {
  const { productsIds } = req.body;

  if (!productsIds) {
    throw new HttpException(400, '"productsIds" is required');
  }

  if (!Array.isArray(productsIds)) {
    throw new HttpException(422, '"productsIds" must be an array');
  }

  if (
    productsIds.length === 0
    || !productsIds.every((element: number) => typeof (element) === 'number')
  ) {
    throw new HttpException(422, '"productsIds" must include only numbers');
  }

  next();
};