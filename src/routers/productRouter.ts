import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import productValidateMiddleware from '../middlewares/productValidateMiddleware';

const router = Router();

const productController = new ProductController();
router.get('/', (req, res) => productController.getAll(req, res));
router.post('/', productValidateMiddleware, (req, res) => productController.create(req, res));

export default router;
