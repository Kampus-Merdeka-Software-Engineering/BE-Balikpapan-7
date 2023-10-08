const express = require("express");
const categoryController = require("../controller/categoryController");
const categoryRoutes = express.Router();

// get all articles
categoryRoutes.get("/", categoryController.getCategory);

// get article by id
categoryRoutes.get("/:CategoryId", categoryController.getCategoryById);

module.exports = { categoryRoutes };
