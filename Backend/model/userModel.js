import Joi from 'joi';
import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      maxlength: 30,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 100,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model('User', userSchema);

export function userValidation(user) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(30).required(),
    email: Joi.string().min(5).max(30).required().email(),
    password: Joi.string().min(5).max(100).required(),
  });
  return schema.validate(user);
}

// export default { User, userValidation };
