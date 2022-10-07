import express from 'express';
import ProductController from './controllers/ProductController';

const app = express();

app.use(express.json());

const productController = new ProductController();
app.get('/products', (req, res) => productController.getAll(req, res));
app.post('/products', (req, res) => productController.create(req, res));

export default app;
