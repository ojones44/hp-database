/* eslint-disable @typescript-eslint/no-var-requires */
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel.cjs');

// ! This file is entered from userRoutes.cjs and will //
// ! call a specific function //

// * @description   Get users
// * @route         GET /api/users
// * @access        Private
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  res.status(200).json(users);
});

// * @description   Create user
// * @route         POST /api/users
// * @access        Private
const createUser = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  const user = await User.create({
    employee: req.body,
  });

  res.status(200).json(user);
});

// * @description   Update user
// * @route         PUT /api/users/:id
// * @access        Private
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error('User not found');
  }

  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    {
      employee: req.body,
    },
    {
      new: true,
    }
  );

  res.status(200).json(updatedUser);
});

// * @description   Delete user
// * @route         DELETE /api/users/:id
// * @access        Private
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error('User not found');
  }

  User.deleteOne({ _id: user.id })
    .then(() => {
      console.log('Data deleted'); // Success
    })
    .catch((error) => {
      console.log(error); // Failure
    });

  res.status(200).json({ Message: `Deleted ${user.id}` });
});

// * Exporting functions out of file //
module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
