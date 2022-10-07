import { Request, Response } from 'express';
import { IProduct } from '../interfaces';
import ProductService from '../services/ProductService';

export default class ProductController {
  productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  async getAll(_req: Request, res: Response) {
    const products: Array<IProduct> = await this.productService.getAll();
    res.status(200).json(products);
  }

  async create(req: Request, res: Response) {
    const newProduct = req.body;
    const createdProduct: IProduct = await this.productService.create(newProduct);
    res.status(201).json(createdProduct);
  }
}