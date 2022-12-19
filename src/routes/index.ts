import { Express } from 'express';
import { router as productsRouter} from './products.router';
import { router as categoriesRouter} from './categories.router';
import { router as usersRouter} from './users.router';


export function routerApi(app: Express) {
  app.use('/products', productsRouter);
  app.use('/categories', categoriesRouter);
  app.use('/users', usersRouter);
}
