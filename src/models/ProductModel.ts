import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IProduct } from '../interfaces';

export default class ProductModel {
  connection: Pool;

  constructor(conn: Pool) {
    this.connection = conn;
  }

  async getAll(): Promise<IProduct[]> {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [products] = await this.connection.execute<IProduct[] & RowDataPacket[]>(query);
    return products;
  }

  async create(newProduct: IProduct): Promise<IProduct> {
    const { name, amount } = newProduct;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [result] = await this.connection.execute<ResultSetHeader>(
      query,
      [name, amount],
    );
    const createdProduct = { id: result.insertId, name, amount };
    return createdProduct;
  }
}