/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose');

// Destructuring mongooses Schema method into a const //
const { Schema } = mongoose;

// Creating a const that holds info for required string //
const requiredString = { type: String, required: true };

// Create new database schema using mongoose.Schema //
const userSchema = new Schema(
  {
    employee: {
      f_name: requiredString,
      // l_name: requiredString,
      // employee_id: requiredString,
      // email: requiredString,
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
const userSchemaModel = mongoose.model('User', userSchema);

module.exports = userSchemaModel;
