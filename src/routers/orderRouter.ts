import { Router } from 'express';
import OrderController from '../controllers/OrderController';
import authMiddleware from '../middlewares/authMiddleware';
import orderValidateMiddleware from '../middlewares/orderValidateMiddleware';

const router = Router();

const orderController = new OrderController();
router.get('/', (req, res) => orderController.getAll(req, res));
router.post(
  '/',
  authMiddleware,
  orderValidateMiddleware,
  (req, res) => orderController.create(req, res),
);

export default router;
