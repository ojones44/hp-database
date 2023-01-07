/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require("mongoose");

// Destructuring mongooses Schema method into a const //
const { Schema } = mongoose;

// Creating a const that holds info for required strings //
const requiredString = {
  type: String,
  required: [true, "Required field..."],
};
const requiredUniqueString = {
  type: String,
  required: [true, "Please input..."],
  unique: true,
};

// Create new database schema using mongoose.Schema //
const userSchema = new Schema(
  {
    employee: {
      f_name: requiredString,
      l_name: requiredString,
      employee_id: requiredUniqueString,
      email: requiredUniqueString,
      // job_role: String,
      // department: String,
      // username: requiredString,
      // password: requiredString,
      // avatar: String,
    },
  },
  {
    timestamps: true,
  }
);

// Create mongoose model from creating Schema //
// Given name in first argument is always singular //
const userSchemaModel = mongoose.model("User", userSchema);

module.exports = userSchemaModel;
