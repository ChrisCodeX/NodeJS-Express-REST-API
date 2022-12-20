import express from 'express';
import { router as productsRouter} from '../routes/products.router';
import { router as categoriesRouter} from '../routes/categories.router';
import { router as usersRouter} from '../routes/users.router';


export function routerApi(app: express.Express) {
  const apiV1Router = express.Router()
  app.use('/api/v1', apiV1Router)

  apiV1Router.use('/products', productsRouter);
  apiV1Router.use('/categories', categoriesRouter);
  apiV1Router.use('/users', usersRouter);
}
