import jwt from 'jsonwebtoken';
import LoginModel from '../models/LoginModel';
import connection from '../models/connection';
import { ILogin, IUser } from '../interfaces';
import HttpException from '../shared/http.exception';

const JWT_SECRET = 'secret';

export default class LoginService {
  loginModel: LoginModel;

  constructor() {
    this.loginModel = new LoginModel(connection);
  }

  generateToken = (resultUser: IUser) => {
    const payload = {
      id: resultUser.id,
      username: resultUser.username,
      classe: resultUser.classe,
      level: resultUser.level,
    };
    return jwt.sign(payload, JWT_SECRET);
  };

  async login(user: ILogin): Promise<string> {
    const resultUser = await this.loginModel.getUser(user);

    if (resultUser.length === 0) {
      throw new HttpException(400, 'Email or password is missing');
    }

    return this.generateToken(resultUser[0]);
  }
}
