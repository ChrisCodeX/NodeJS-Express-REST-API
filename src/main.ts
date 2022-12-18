import express from 'express';

const app = express();

const port = 3000;

app.get('/', (req, res)=>{
  console.log('Request in / endpoint');
  res.send('Hello, the server was made in express');
});

app.listen(port);
