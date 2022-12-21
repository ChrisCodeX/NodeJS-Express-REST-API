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

  /* Methods */
  public async create(data: Product) {
    return new Promise<Product>((resolve, reject) => {
      setTimeout(() => {
        const newProduct = {
          id: faker.datatype.uuid(),
          ...data
        }
        this.products.push(newProduct);
        resolve(newProduct)
      }, 1000);
    })
  }

  public async find() {
    return new Promise<Product[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products)
      }, 1000);
    })
  }

  public async findOne(id: string) {
    throw new Error('Error papu')
    return new Promise<Product | undefined>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products.find(item => item.id === id))
      }, 1000);
    })
  }

  public async update(id: string, changes: any) {
    return new Promise<Product>((resolve, reject) => {
      setTimeout(() => {
        const index = this.products.findIndex(item => item.id === id);
        if (index === -1) {
          throw new Error('product not found')
        }

        const product = this.products[index]
        this.products[index] = {
          ...product,
          ...changes
        }

        resolve(this.products[index])
      }, 1000);
    })
  }

  public async delete(id: string) {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        const index = this.products.findIndex(item => item.id === id);
        if (index === -1) {
          throw new Error('product not found')
        }
        this.products.splice(index, 1)
        resolve(id)
      }, 1000);
    })
  }
}
