import { Router } from 'express';
import LoginController from '../controllers/loginController';
import loginValidateMiddleware from '../middlewares/loginValidateMiddleware';

const router = Router();

const loginController = new LoginController();
router.get('/', loginValidateMiddleware, (req, res) => loginController.login(req, res));

export default router;
