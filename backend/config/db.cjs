/* eslint-disable @typescript-eslint/no-var-requires */
// * This file is used to connect to MongoDB //
const mongoose = require("mongoose");

// ? Mongoose is an Object Data Modeling (ODM) library for //
// ? MongoDB and Node.js. It manages relationships between //
// ? data, provides schema validation, and is used to translate //
// ? between objects in code and the representation of those //
// ? objects in MongoDB. //

// ! Function to connect to mongoose //

// Create const and await mongoose connection, passing it //
// the unique URI in the form of a variable from the //
// dotenv file //
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    // Similar to a 'break' code in Python//
    // It can be either 0 or 1. 0 means end the process //
    // without any kind of failure and 1 means end the //
    // process with some failure. //
    // Here we're exiting with a failure (1) as we're in the //
    // error condition //
    process.exit(1);
  }
};

module.exports = connectDB;
