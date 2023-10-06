const express = require("express");
const userController = require("../controller/UserContreller");
const userRoutes = express.Router();

// get all users
userRoutes.get("/", userController.getUsers);
// Create new user (sign in)
userRoutes.post("/", userController.newUser);

// Get a user by Sign in
userRoutes.get("/:user", userController.getSpecificUser);

module.exports = { userRoutes };
