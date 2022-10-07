import ProductModel from '../models/ProductModel';
import connection from '../models/connection';
import { IProduct } from '../interfaces';

export default class ProductService {
  productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  async getAll() {
    const products: Array<IProduct> = await this.productModel.getAll();
    return products;
  }

  async create(newProduct: IProduct): Promise<IProduct> {
    const createdProduct: IProduct = await this.productModel.create(newProduct);
    return createdProduct;
  }
}