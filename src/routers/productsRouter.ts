import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const router = Router();

const productController = new ProductController();
router.get('/', (req, res) => productController.getAll(req, res));
router.post('/', (req, res) => productController.create(req, res));

export default router;
