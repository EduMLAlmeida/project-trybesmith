import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
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

  async create(newOrder: IOrder): Promise<IOrder> {
    const { userId, productsIds } = newOrder;
    const query1 = 'INSERT INTO Trybesmith.Orders (userId) VALUE (?)';
    const [result] = await this.connection.execute<ResultSetHeader>(
      query1,
      [userId],
    );
    const query2 = 'UPDATE Trybesmith.Products SET orderId=? WHERE id=?';
    productsIds.forEach(async (productId) => {
      await this.connection.execute<ResultSetHeader>(
        query2,
        [result.insertId, productId],
      );
    });
    const createdOrder = { userId, productsIds };
    return createdOrder;
  }
}