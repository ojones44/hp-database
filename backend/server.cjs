/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware.cjs");
const connectDB = require("./config/db.cjs");
const userRoutes = require("./routes/userRoutes.cjs");
// TODO const machineRoutes = require("./routes/machineRoutes.cjs");
// TODO const componentRoutes = require("./routes/componentRoutes.cjs");

// ? Include CORS?
// * const cors = require('cors');
// * app.use(cors());

// ? The cors library is a Node.js middleware that allows //
// ? you to enable CORS in your Express.js server with ease //
// ? It works by adding the appropriate CORS headers to the //
// ? server's responses. //

const port = process.env.PORT || 5000;
const userEndpoint = "/api/users";
// TODO const machineEndpoint = "/api/machines";
// TODO const componentsEndpoint = "/api/components";

// Calling our custom imported function module //
connectDB();

// Creating instance of express modeule to tap into its //
// methods //
const app = express();

// Middleware //
// These are needed between Req & Res cycle //
// Parse incoming Request as a JSON file //
app.use(express.json());

// Parse incoming Request as strings or arrays //
// with application/x-www-form-urlencoded, basically can only //
// parse incoming Request Object if it is strings or arrays //
app.use(express.urlencoded({ extended: false }));

// When the filepath is hit, JS will jump into the require //
// as a callback function and jump into the specified file //

// userRoutes will handle all requests to the userEndpoint path //
// app.use() mounts the path inside userEndpoint to userRoutes //
app.use(userEndpoint, userRoutes);
// TODO app.use(machineEndpoint, machineRoutes);
// TODO app.use(componentsEndpoint, componentRoutes);

// Custom function will overwrite default express error handler //
app.use(errorHandler);

// File is listening on specified port, socket is created //
// and bound to specified port with an IP address //
app.listen(port, () => console.log(`Server started on port ${port}`));
