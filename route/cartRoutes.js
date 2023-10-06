const express = require("express");
const cartController = require("../controller/cartcontroller");
const cartRoutes = express.Router();

// get cart
cartRoutes.get("/", cartController.getCart);

// add product to cart
cartRoutes.post("/", cartController.addProductToCart);

module.exports = { cartRoutes };
