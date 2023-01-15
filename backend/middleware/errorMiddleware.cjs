// Middleware are just methods/functions/operations that //
// execute between processing the Request and sending the Repsonse //

// The middleware acts like a general reciever for every request //
// and can perform tasks such as parsing request data, authenticating //
// users, and modifying the response. //

// This is what allows you to access and use req.body //

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = {
  errorHandler,
};
