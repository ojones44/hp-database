/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");

// Create instance of the express Router method //
const router = express.Router();

// Import HTTP request response handler functions //
const {
  getUsers,
  getMe,
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController.cjs");

// Import protected route function
// Pass this as another arg in router.get() to protect with JWT
const { protect } = require("../middleware/authMiddleware.cjs");

// Calls the getUsers function inside userController.cjs //
router.get("/", getUsers);

// Calls the getMe function inside userController.cjs //
router.get("/me", protect, getMe);

// Calls the registerUser function inside userController.cjs //
router.post("/register", registerUser);

// Calls the loginUser function inside userController.cjs //
router.post("/login", loginUser);

// Calls the updateUser function inside userController.cjs //
router.put("/:id", updateUser);

// Calls the deleteUser function inside userController.cjs //
router.delete("/:id", deleteUser);

module.exports = router;

// This file is entered from server.cjs when a filepath is hit //
// It will then jump to the relevant router, and call one of the //
// imported functions //

// In this example, the router object has methods for handling
// GET, POST, PUT, and DELETE requests to the specified path. These
// routes can then be imported and used in the main app.
