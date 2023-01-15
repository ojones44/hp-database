const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.cjs");

// JWT's are sent through the HTTP header that is generated in a req/res cycle
// Inside the header there is an "authorization" object

const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Conditional check to make sure there is data,
  // and that it is a bearer token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      // In the header, syntax is "Bearer <token>"
      // So we need to split the token from the bearer keyword
      token = req.headers.authorization.split(" ")[1];

      // Verify token using JWT built in method, returns an object
      // Essentially deconstructs the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // console.log(decoded);
      // Will return: { id: '63c29f6d97fa78b3c5836d78', iat: 1673700796, exp: 1676292796 }

      // Get user from the token (token has user id as a payload)
      // Store it under req.user, and use .select() to omit the
      // password being stored in the variable
      req.user = await User.findById(decoded.id).select("-password");

      // Call next piece of middleware
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };
