import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces';

export default class UserModel {
  connection: Pool;

  constructor(conn: Pool) {
    this.connection = conn;
  }

  async create(newUser: IUser): Promise<IUser> {
    const { username, classe, level, password } = newUser;
    const query = 'INSERT INTO Trybesmith.Users (username, classe, level, password) '
      + 'VALUES (?, ?, ?, ?)';
    const [result] = await this.connection.execute<ResultSetHeader>(
      query,
      [username, classe, level, password],
    );
    const createdUser = { id: result.insertId, username, classe, level };
    return createdUser;
  }
}