import express from 'express';

export const router = express.Router();

/* Examples */
// User endpoint
router.get('/:id', (req,res)=>{
  const {id} = req.params;
  res.json({
    id,
    name: 'Christian',
    age: 24
  });
});
