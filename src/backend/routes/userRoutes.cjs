/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');

const router = express.Router();

// * Import HTTP request response functions //
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController.cjs');

// ! This file is entered from server.cjs when a filepath is hit //
// ! It will then jump to the relevant router, and call one of the //
// ! imported functions //

// ? 🤪 Alternative refactored syntax //

// ? router.route('/').get(getUsers).post(createUser);
// ? router.route('/:id').put(updateUser).delete(deleteUser);

router.get('/', getUsers);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;
