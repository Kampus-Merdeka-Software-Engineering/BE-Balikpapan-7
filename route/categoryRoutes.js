const express = require("express");
const categoryController = require("../controller/categoryController");
const categoryRoutes = express.Router();

// get all articles
categoryRoutes.get("/", categoryController.getArticles);

// get article by id
categoryRoutes.get("/:articleId", categoryController.getArticleById);

module.exports = { categoryRoutes };
