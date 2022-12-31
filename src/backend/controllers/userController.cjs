// eslint-disable-next-line @typescript-eslint/no-var-requires
const asyncHandler = require('express-async-handler');

// ! This file is entered from userRoutes.cjs and will //
// ! call a specific function //

// * @description   Get users
// * @route         GET /api/users
// * @access        Private
const getUsers = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get Users' });
});

// * @description   Create user
// * @route         POST /api/users
// * @access        Private
const createUser = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  res.status(200).json({ message: 'Create User' });
});

// * @description   Update user
// * @route         PUT /api/users/:id
// * @access        Private
const updateUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update user ${req.params.id}` });
});

// * @description   Delete user
// * @route         DELETE /api/users/:id
// * @access        Private
const deleteUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete user ${req.params.id}` });
});

// * Exporting functions out of file //
module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
