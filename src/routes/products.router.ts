import express from 'express';
import faker from 'faker';

/* Router */
export const router = express.Router();

/* Products endpoints */
/* Query parameters */
// Uri: /products?size=xx
router.get('/',(req, res)=>{
  const {size} = req.query
  const limit = size || 10
  const products = [];
  for (let i = 0; i < parseInt(limit.toString(), 10); i++){
    products.push(
      {
        id: i,
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(1, 1000),10),
        imageUrl: faker.image.imageUrl()
      }
    );
  }
  res.json(products);
});

// product root endpoint - No se mostrará debido a que el router de arriba está
// en primer orden
router.get('/', (req, res)=>{
  res.json({
    name: 'product1',
    price: 32
  });
});

/* Get a parameter from request */
// Way 1
router.get('/:idProduct',(req, res)=>{
  const idProd = req.params.idProduct;
  /* Other way - Desestructuración*/
  // const {idProduct} = req.params
  res.json(
    {
      idProduct: idProd,
      name: `Product ${idProd}`
    }
  );
});



// Product detail
router.get('/v1/products/:id/detail', (req, res)=>{
  const idProduct = req.params.id;
  res.json({
    id: idProduct,
    name: `Product ${idProduct}`
  });
});

// Uri: /v1/products?limit=xx&&offset=xx
// router.get('/v1/products', (req, res) => {
//   const { limit, offset } = req.query;
//   if (limit && offset) {
//     res.json({
//       limit,
//       offset
//     });
//   } else {
//     res.send(
//       res.send('No hay parámetros')
//     );
//   }
// });
