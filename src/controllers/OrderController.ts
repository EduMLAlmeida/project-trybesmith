import { Request, Response } from 'express';
import { IOrder } from '../interfaces';
import OrderService from '../services/OrderService';

export default class OrderController {
  orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  async getAll(_req: Request, res: Response) {
    const orders: Array<IOrder> = await this.orderService.getAll();
    res.status(200).json(orders);
  }
}