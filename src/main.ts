import express from 'express';

const app = express();

const port = 3000;

/* Root endpoint */
app.get('/', (req, res)=>{
  console.log('Request in / endpoint');
  res.send('Hello, the server was made in express');
});

app.get('/products', (req, res)=>{
  res.json({
    name: 'product1',
    price: 32
  });
});

/* Get a parameter from request */
// Way 1
app.get('/v1/products/:idProduct',(req, res)=>{
  const idProd = req.params.idProduct;
  res.json(
    {
      idProduct: idProd,
      name: `Product ${idProd}`
    }
  );
});

// Way 2 - Desestructuración
app.get('/v2/products/:id', (req, res)=>{
  const {id} = req.params;
  res.json({
    idProduct: id,
    name: `Product ${id}`
  });
});


/* Listen message */
console.log('listening on port:', port);
app.listen(port);
