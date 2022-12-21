import joi from 'joi';

const id = joi.string().uuid();
const name = joi.string().alphanum().min(3).max(20)
const price = joi.number().integer().min(10)

/* Schemas creation */
export const createProductSchema = joi.object({
  name: name.required(),
  price: price.required()
})

export const updateProductSchema = joi.object({
  name: name,
  price: price
})

export const getProductSchema = joi.object({
  id: id.required()
})
