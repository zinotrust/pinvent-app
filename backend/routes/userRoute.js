const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/userController");

router.post("/register", registerUser);

module.exports = router;
