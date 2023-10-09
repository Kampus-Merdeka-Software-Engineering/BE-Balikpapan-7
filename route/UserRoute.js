const express = require("express");
const userController = require("../controller/UserContreller");
const userRoutes = express.Router();

// get all users
userRoutes.get("/Users", userController.getUsers);
// Create new user (sign in)
userRoutes.post("/newUser", userController.newUser);

// Get a user by Sign in
userRoutes.get("/:user", userController.getSpecificUser);

module.exports = { userRoutes };
