import { RowDataPacket } from 'mysql2';
import { Pool } from 'mysql2/promise';

export default class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll() {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [products] = await this.connection.execute<RowDataPacket[]>(query);
    return products;
  }
}