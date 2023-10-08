require("dotenv").config();
const cors = require("cors");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

const { teamRoutes } = require("./route/teamRoutes");
const { categoryRoutes } = require("./route/categoryRoutes");
const { cartRoutes } = require("./route/cartRoutes");
const { productRoutes } = require("./route/productRoutes");
const { userRoutes } = require("./route/UserRoute");

app.use("/teams", teamRoutes);
app.use("/carts", cartRoutes);
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);
app.use("/users", userRoutes);

app.listen(PORT, "0.0.0.0", function() => {
  console.log(`Server is running on port ${PORT}`);
});
