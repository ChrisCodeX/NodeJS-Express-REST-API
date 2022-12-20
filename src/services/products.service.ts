import faker from 'faker';
import { Product } from '../models/products.model';

export class ProductService {
  public products: Product[]
  constructor(){
    this.products = []
    this.generate();
  }

  private generate() {
    const limit = 10
    for (let i = 0; i < parseInt(limit.toString(), 10); i++) {
      this.products.push(
        {
          id: faker.datatype.uuid(),
          name: faker.commerce.productName(),
          price: parseInt(faker.commerce.price(1, 1000), 10),
          imageUrl: faker.image.imageUrl()
        }
      );
    }
  }

  public create(data: Product) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  public find() {
    return this.products
  }

  findOne(id: string) {
    return this.products.find(item => item.id === id)
  }

  public update(id: string, changes: any) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('product not found')
    }

    const product = this.products[index]
    this.products[index] = {
      ...product,
      ...changes
    }
    return this.products[index]
  }

  delete(id: string) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('product not found')
    }

    this.products.splice(index, 1)
    return { id };
  }
}
