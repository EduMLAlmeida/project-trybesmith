import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

export default class ProductController {
  productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  async getAll(_req: Request, res: Response) {
    const products = await this.productService.getAll();
    res.status(200).json(products);
  }
}