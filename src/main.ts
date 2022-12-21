import express from 'express';
import { routerApi } from './routes';
import { logErrors, errorHandler } from './middleware/error.handler';

const app = express();

const port = 3000;

app.use(express.json());

/* Routes assigned to application instance */
routerApi(app);

/* Error middlewares - Van al final
Otros middlewares van delante
*/

app.use(logErrors)
app.use(errorHandler)

/* Listen message */
console.log('listening on port:', port);
app.listen(port);
