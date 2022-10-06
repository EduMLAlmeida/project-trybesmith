import ProductModel from '../models/ProductModel';
import connection from '../models/connection';

export default class ProductService {
  productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  async getAll() {
    const products = await this.productModel.getAll();
    return products;
  }
}