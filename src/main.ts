import express from 'express';
import { routerApi } from './server';

const app = express();

const port = 3000;

app.use(express.json());

/* Routes assigned to application instance */
routerApi(app);

/* Listen message */
console.log('listening on port:', port);
app.listen(port);
