import express from 'express';
import { UsersService as usersService } from '../services/users.service';

export const router = express.Router();

const users = new usersService()

router.get('/', (req, res) => {
  res.json(users.users)
})
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
