/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");

// Create instance of the express Router method //
const router = express.Router();

// Import HTTP request response handler functions //
const {
  getMachines,
  getMachine,
  createMachine,
  updateMachine,
  deleteMachine,
} = require("../controllers/machineController.cjs");

// This file is entered from server.cjs when a filepath is hit //
// It will then jump to the relevant router, and call one of the //
// imported functions //

// In this example, the router object has methods for handling
// GET, POST, PUT, and DELETE requests to the specified path. These
// routes can then be imported and used in the main app.

// ? 🤪 Alternative refactored syntax //

// ? router.route('/').get(getMachines).post(createMachine);
// ? router.route('/:id').put(updateMachine).delete(deleteMachine);

// Calls the getMachines function inside machineController.cjs //
router.get("/", getMachines);

// Calls the getMachine function inside machineController.cjs //
router.get("/:id", getMachine);

// Calls the registerMachine function inside machineController.cjs //
router.post("/", createMachine);

// Calls the updateMachine function inside machineController.cjs //
router.put("/:id", updateMachine);

// Calls the deleteMachine function inside machineController.cjs //
router.delete("/:id", deleteMachine);

module.exports = router;
