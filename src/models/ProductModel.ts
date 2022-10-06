import { RowDataPacket } from 'mysql2';
import connection from './connection';

export default class ProductModel {
  getAll = async () => {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [products] = await connection.execute<RowDataPacket[]>(query);
    return products;
  };
}