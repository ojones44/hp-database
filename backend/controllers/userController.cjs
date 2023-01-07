/* eslint-disable @typescript-eslint/no-var-requires */
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.cjs");

const httpStatus = {
  ok: 200,
  bad: 400,
};

// ! This file is entered from userRoutes.cjs and will //
// ! call a specific function //

// @description   Get users list
// @route         GET /api/users
// @access        Private
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  res.status(httpStatus.ok).json(users);
});

// @description   Get user data
// @route         GET /api/users/me
// @access        Public
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "Get user, me" });
});

// @description   Register new user
// @route         POST /api/users/register
// @access        Public
const registerUser = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(httpStatus.bad);
    throw new Error("Please add a text field");
  }

  const user = await User.create({
    employee: req.body,
  });

  res.status(httpStatus.ok).json(user);
});

// @description   Authenticate new user
// @route         POST /api/users/login
// @access        Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Authenticate user" });
});

// @description   Update user
// @route         PUT /api/users/:id
// @access        Private
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(httpStatus.bad);
    throw new Error("User not found");
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

  res.status(httpStatus.ok).json(updatedUser);
});

// @description   Delete user
// @route         DELETE /api/users/:id
// @access        Private
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(httpStatus.bad);
    throw new Error("User not found");
  }

  User.deleteOne({ _id: user.id })
    .then(() => {
      console.log("Data deleted"); // Success
    })
    .catch((error) => {
      console.log(error); // Failure
    });

  res.status(httpStatus.ok).json({ Message: `Deleted ${user.id}` });
});

// Exporting functions out of file //
module.exports = {
  getUsers,
  getMe,
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
};
