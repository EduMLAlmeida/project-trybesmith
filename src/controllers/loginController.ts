import { Request, Response } from 'express';
import LoginService from '../services/LoginService';

export default class LoginController {
  loginService: LoginService;

  constructor() {
    this.loginService = new LoginService();
  }

  async login(req: Request, res: Response) {
    const token: string = await this.loginService.login(req.body);
    res.status(200).json({ token });
  }
}