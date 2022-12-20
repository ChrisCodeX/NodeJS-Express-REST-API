import faker from 'faker';
import { Product } from '../models/products.model';

export class ProductService {
  products: Product[]
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

  create() {
  //
  }

  find() {
    return this.products
  }

  findOne(id: string) {
    return this.products.find(item => item.id === id)
  }

  update() {
    //
  }

  delete() {
    //
  }
}
