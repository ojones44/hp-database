/* eslint-disable @typescript-eslint/no-var-requires */
const asyncHandler = require("express-async-handler");
const Machine = require("../models/machineModel.cjs");

const httpStatus = {
  ok: 200,
  bad: 400,
};

// ! This file is entered from machineRoutes.cjs and will //
// ! call a specific function //

// @description   Get machines list
// @route         GET /api/machines
// @access        Public
const getMachines = asyncHandler(async (req, res) => {
  const machines = await Machine.find();

  res.status(httpStatus.ok).json(machines);
});

// @description   Get machine data
// @route         GET /api/machines/:id
// @access        Public
const getMachine = asyncHandler(async (req, res) => {
  res.json({ message: "This should return a machine" });
});

// @description   Create a new machine
// @route         POST /api/machines/:id
// @access        Public
const createMachine = asyncHandler(async (req, res) => {
  console.log("I got here");
  if (!req.body) {
    res.status(httpStatus.bad);
    throw new Error("Please add a text field");
  }

  const machine = await Machine.create(req.body);

  res.status(httpStatus.ok).json(machine);
});

// @description   Update machine
// @route         PUT /api/machines/:id
// @access        Public
const updateMachine = asyncHandler(async (req, res) => {
  const machine = await Machine.findById(req.params.id);

  if (!machine) {
    res.status(httpStatus.bad);
    throw new Error("Machine not found");
  }

  const updatedMachine = await Machine.findByIdAndUpdate(
    req.params.id,
    {
      employee: req.body,
    },
    {
      new: true,
    }
  );

  res.status(httpStatus.ok).json(updatedMachine);
});

// @description   Delete machine
// @route         DELETE /api/machines/:id
// @access        Private
const deleteMachine = asyncHandler(async (req, res) => {
  const machine = await Machine.findById(req.params.id);

  if (!machine) {
    res.status(httpStatus.bad);
    throw new Error("Machine not found");
  }

  Machine.deleteOne({ _id: machine.id })
    .then(() => {
      console.log("Machine deleted"); // Success
    })
    .catch((error) => {
      console.log(error); // Failure
    });

  res.status(httpStatus.ok).json({ Message: `Deleted ${machine.id}` });
});

// Exporting functions out of file //
module.exports = {
  getMachines,
  getMachine,
  createMachine,
  updateMachine,
  deleteMachine,
};
