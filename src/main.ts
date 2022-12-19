import express from 'express';
import { routerApi } from './routes';

const app = express();

const port = 3000;

/* Routes assigned to application instance */
routerApi(app);

/* Listen message */
console.log('listening on port:', port);
app.listen(port);
