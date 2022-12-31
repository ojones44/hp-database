/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredString = { type: String, required: true };

const userSchema = new Schema(
  {
    employee: {
      employee_fname: requiredString,
      // employee_lname: requiredString,
      // eployee_id: requiredString,
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

module.exports = mongoose.model('User', userSchema);
