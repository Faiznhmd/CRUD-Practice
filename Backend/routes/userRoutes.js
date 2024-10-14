import express from 'express';
import {
  getAllUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';

const userRoute = express.Router();

userRoute.post('/', createUser);
userRoute.get('/:id', getSingleUser);
userRoute.put('/:id', updateUser);
userRoute.delete('/:id', deleteUser);
userRoute.get('/', getAllUsers);

export default userRoute;
