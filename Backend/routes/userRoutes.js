import express from 'express';
import {
  getAllUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';

const userRoute = express.Router();

userRoute.get('/', getAllUsers);
userRoute.post('/', createUser);
userRoute.get('/:id', getSingleUser);
userRoute.put('/:id', updateUser);
userRoute.delete('/:id', deleteUser);

export default userRoute;
