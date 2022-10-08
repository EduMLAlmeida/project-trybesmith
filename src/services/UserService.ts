import jwt from 'jsonwebtoken';
import UserModel from '../models/UserModel';
import connection from '../models/connection';
import { IUser } from '../interfaces';

const JWT_SECRET = 'secret';

export default class UserService {
  userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  generateToken = (createdUser: IUser) => {
    const { id, username, classe, level } = createdUser;
    const payload = { id, username, classe, level };
    return jwt.sign(payload, JWT_SECRET);
  };

  async create(newUser: IUser): Promise<string> {
    const createdUser: IUser = await this.userModel.create(newUser);
    return this.generateToken(createdUser);
  }
}