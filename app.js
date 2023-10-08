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

<<<<<<< HEAD
app.listen(PORT, () => {
=======
app.listen(PORT, "0.0.0.0", function() => {
>>>>>>> add79aa23bb0f18e0c38cc5398d405a76dcde8a1
  console.log(`Server is running on port ${PORT}`);
});
