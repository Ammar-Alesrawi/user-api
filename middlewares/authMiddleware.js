// middlewares/authMiddleware.js
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
    
  // Check if token is provided
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  const token = authHeader.split(" ")[1];

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "mysecret");
    req.user = decoded; // attach user info to request
    next(); // move to next middleware or route
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token." });
  }
};
