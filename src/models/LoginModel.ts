import { Pool, RowDataPacket } from 'mysql2/promise';
import { ILogin, IUser } from '../interfaces';

export default class LoginModel {
  connection: Pool;

  constructor(conn: Pool) {
    this.connection = conn;
  }

  async getUser(user: ILogin): Promise<IUser[]> {
    const { username, password } = user;
    const query = 'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?';
    const [result] = await this.connection.execute<IUser[] & RowDataPacket[]>(
      query,
      [username, password],
    );
    return result;
  }
}