import express from 'express';
import { ProductService } from '../services/products.service';

/* Router */
export const router = express.Router();

const productService = new ProductService();

/* Products endpoints */

/* Query parameters */
// Uri: /products?size=xx
router.get('/',(req, res)=>{
  const products = productService.products
  res.status(200).json(
    products
  );
});

/* Get a parameter from request */
// Way 1
router.get('/:idProduct', (req, res) => {
  const idProd = req.params.idProduct;

  const product = productService.findOne(idProd)
  res.json(product);
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
  const newProduct = productService.create(body);
  res.status(201).json(newProduct)
})

/* Patch Methods */
router.patch('/:id', (req, res) => {
  const body = req.body
  const {id} = req.params
  const product = productService.update(id, body)
  res.json(product)
})

/* Delete Methods */
router.delete('/:id', (req, res) => {
  const {id} = req.params
  const product = productService.delete(id)
  res.json(product)
})
