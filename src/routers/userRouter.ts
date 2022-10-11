import { Router } from 'express';
import UserController from '../controllers/UserController';
import userValidateMiddleware from '../middlewares/userValidateMiddleware';

const router = Router();

const userController = new UserController();
router.post('/', userValidateMiddleware, (req, res) => userController.create(req, res));

export default router;
