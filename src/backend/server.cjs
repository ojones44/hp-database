/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware.cjs');

const port = process.env.PORT || 5000;
const app = express();

// ! Middleware //
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// ! Middleware //

// * When the filepath is hit, JS will jump into the require //
// * as a callback function and jump into the specified file //
app.use('/api/users', require('./routes/userRoutes.cjs'));

// ! Custom function will overwrite default express error handler //
app.use(errorHandler);

// * File is listening on specified port //
app.listen(port, () => console.log(`Server started on port ${port}`));
