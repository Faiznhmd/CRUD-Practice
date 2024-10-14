import { User, userValidation } from '../model/userModel.js';

export const createUser = async (req, res) => {
  const { error } = userValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //create a new user
  let user = new User(req.body);
  try {
    user = await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

//get a single user
export const getSingleUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(400).json({ message: 'User does not exist' });
  res.send(user);
};

//update
export const updateUser = async (req, res) => {
  const { error } = userValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!user) return res.status(400).json({ message: 'User not found' });
  res.status(200).send(user);
};

//delete user
export const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(400).json({ message: 'User not found' });
  res.status(200).send('User deleted sucessfully');
};

//get all user

export const getAllUsers = async (req, res) => {
  const user = await User.find();
  res.status(200).send(user);
};
