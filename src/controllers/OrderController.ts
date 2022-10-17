import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { IOrder } from '../interfaces';
import OrderService from '../services/OrderService';

const JWT_SECRET = 'secret';

export default class OrderController {
  orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  async getAll(_req: Request, res: Response) {
    const orders: Array<IOrder> = await this.orderService.getAll();
    res.status(200).json(orders);
  }

  async create(req: Request, res: Response) {
    const { authorization } = req.headers;
    const user = jwt.verify(authorization as string, JWT_SECRET);
    const { id } = user as jwt.JwtPayload;
    const newOrder = { userId: id, productsIds: req.body.productsIds };
    const createdOrder: IOrder = await this.orderService.create(newOrder);
    res.status(201).json(createdOrder);
  }
}