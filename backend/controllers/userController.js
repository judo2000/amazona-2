import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/UserModel.js';
import { generateToken } from '../utils.js';

const signinUser = expressAsyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user),
      });
      return;
    }
  }
  res.status(401).send({ message: 'Invalid email or password' });
});

const signupUser = expressAsyncHandler(async (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
  });
  const user = await newUser.save();
  res.send({
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateToken(user),
  });
});

export { signinUser, signupUser };
