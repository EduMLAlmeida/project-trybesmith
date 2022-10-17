import OrderModel from '../models/OrderModel';
import connection from '../models/connection';
import { IOrder } from '../interfaces';

export default class OrderService {
  orderModel: OrderModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
  }

  async getAll() {
    const orders: Array<IOrder> = await this.orderModel.getAll();
    return orders;
  }

  async create(newOrder: IOrder): Promise<IOrder> {
    const createdOrder: IOrder = await this.orderModel.create(newOrder);
    return createdOrder;
  }
}