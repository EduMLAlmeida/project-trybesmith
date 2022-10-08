import { Pool, RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces';

export default class OrderModel {
  connection: Pool;

  constructor(conn: Pool) {
    this.connection = conn;
  }

  async getAll(): Promise<IOrder[]> {
    const query = `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS "productsIds" 
    FROM Trybesmith.Orders AS o 
    INNER JOIN Trybesmith.Products AS p ON p.orderId=o.id 
    GROUP BY o.id`;
    const [orders] = await this.connection.execute<IOrder[] & RowDataPacket[]>(query);
    return orders;
  }
}