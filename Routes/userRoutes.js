const express = require("express");
const router = express.Router();
const {
  register,
  getUsers,
  deleteUser,
  updateUser,
} = require("../controllers/userController");
const { registerValidation } = require("../utils/validators");
const { validationResult } = require("express-validator");
const authMiddleware = require("../middlewares/authMiddleware");

// Middleware to handle validation errors
const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

router.post("/users", registerValidation, handleValidation, register);
router.get("/users", authMiddleware, getUsers);
router.delete("/users/:id", authMiddleware, deleteUser);
router.put("/users/:id", authMiddleware, updateUser);

module.exports = router;
