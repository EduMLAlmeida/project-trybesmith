import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async create(req: Request, res: Response) {
    const newUser = req.body;
    const token: string = await this.userService.create(newUser);
    res.status(201).json({ token });
  }
}