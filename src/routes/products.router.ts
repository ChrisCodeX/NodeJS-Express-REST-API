import express from 'express';
import { ProductService } from '../services/products.service';

/* Router */
export const router = express.Router();

const productService = new ProductService();

/* Products endpoints */

// Query parameters
// Uri: /products?size=xx
router.get('/',async (req, res)=>{
  try {
    const products = await productService.find()
    res.status(200).json(products);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({
        message: error.message
      })
    }
  }
});

// Get a parameter from request
// Way 1
router.get('/:idProduct',async (req, res, next) => {
  try {
    const idProd = req.params.idProduct;
    const product = await productService.findOne(idProd)

    res.status(200).json(product);
  } catch (error) {
    if (error instanceof Error) {
      next(error)
    }
  }
});

/* Post Methods */
router.post('/',async (req, res) => {
  try {
    const body = req.body
    const newProduct = await productService.create(body);
    res.status(201).json(newProduct)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({
        message: error.message
      })
    }
  }
})

/* Patch Methods */
router.patch('/:id',async (req, res) => {
  try {
    const body = req.body
    const {id} = req.params
    const product = await productService.update(id, body)
    res.status(200).json(product)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({
        message: error.message
      })
    }
  }
})

/* Delete Methods */
router.delete('/:id',async (req, res) => {
  try {
    const {id} = req.params
    const product = await productService.delete(id);
    res.status(200).json({
     id: product
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({
        message: error.message
      })
    }
  }
})
