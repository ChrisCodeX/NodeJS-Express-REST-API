import express from 'express';

const app = express();

const port = 3000;

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

app.listen(port);
