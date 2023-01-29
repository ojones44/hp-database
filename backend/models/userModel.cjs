/* eslint-disable @typescript-eslint/no-var-requires */
const { requiredString, requiredUniqueString } = require("./modelTypes.cjs");
const mongoose = require("mongoose");

// Destructuring mongooses Schema method into a const //
const { Schema } = mongoose;

// Create new database schema using mongoose.Schema //
const userSchema = new Schema(
  {
    employee: {
      fName: requiredString,
      lName: requiredString,
      employeeId: requiredUniqueString,
      email: requiredUniqueString,
      // jobRole: String,
      // department: String,
      // username: requiredString,
      // password: requiredString,
      // avatar: String,
    },
  },
  { timestamps: true }
);

// Create mongoose model from creating Schema //
// Given name in first argument is always singular //
const userSchemaModel = mongoose.model("User", userSchema);

module.exports = userSchemaModel;
