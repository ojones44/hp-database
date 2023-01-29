/* eslint-disable @typescript-eslint/no-var-requires */
const { requiredString, requiredUniqueString } = require("./modelTypes.cjs");
const mongoose = require("mongoose");

// Destructuring mongooses Schema method into a const //
const { Schema } = mongoose;

// Creating a const that holds info for fields //
const optionalString = {
  type: String,
  required: [false, "(Optional)"],
};

const requiredString = {
  type: String,
  required: [true, "Required field..."],
};

const requiredUniqueString = {
  type: String,
  required: [true, "Please input..."],
  unique: true,
};

const requiredUniqueNumber = {
  type: Number,
  required: [true, "Please input..."],
  unique: true,
};

const userData = {
  fName: requiredString,
  lName: requiredString,
  employeeID: requiredUniqueNumber,
  stampNo: requiredUniqueNumber,
  email: requiredUniqueString,
  password: requiredString,
  jobRole: requiredString,
  department: requiredString,
  avatar: optionalString,
};

// Create new database schema using mongoose.Schema //
const userSchema = new Schema(userData, {
  timestamps: true,
});

// Create mongoose model from creating Schema //
// Given name in first argument is always singular //
const userSchemaModel = mongoose.model("User", userSchema);

module.exports = userSchemaModel;
