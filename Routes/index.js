const router = require("express").Router();
const user = require("./userRoutes");
const authRoutes = require("./authRoutes");

router.use("/Task", authRoutes)
router.use("/Task", user);

module.exports = router;
