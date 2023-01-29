/* eslint-disable @typescript-eslint/no-var-requires */
const { requiredString, requiredUniqueString } = require("./modelTypes.cjs");
const mongoose = require("mongoose");

// Destructuring mongooses Schema method into a const //
const { Schema } = mongoose;

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
