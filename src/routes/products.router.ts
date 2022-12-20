import express from 'express';
import faker from 'faker';
import { ProductService } from '../services/product.service';

/* Router */
export const router = express.Router();

const productService = new ProductService();

/* Products endpoints */

/* Query parameters */
// Uri: /products?size=xx
router.get('/',(req, res)=>{
  const products = productService.products
  res.status(200).json({
    products
  });
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

  if (parseInt(idProd) >= 100) {
    res.status(404).json({
      message: 'not found'
    })
  } else {
    res.json(
      {
        idProduct: idProd,
        name: `Product ${idProd}`
      }
    );
  }
});



// Product detail
router.get('/:id/detail', (req, res)=>{
  const idProduct = req.params.id;
  res.json({
    id: idProduct,
    name: `Product ${idProduct}`
  });
});

/* Post Methods */
router.post('/', (req, res) => {
  const body = req.body
  res.status(201).json({
    message: body
  })
})

/* Patch Methods */
router.patch('/:id', (req, res) => {
  const body = req.body
  const {id} = req.params
  res.json({
    message: 'updated',
    data: body,
    id: id
  })
})

/* Delete Methods */
router.delete('/:id', (req, res) => {
  const {id} = req.params
  res.json({
    message: 'deleted',
    id: id
  })
})
