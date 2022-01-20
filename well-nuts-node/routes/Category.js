const express = require("express");
const CategoryController = require("../controllers/Category");

const { body } = require("express-validator");
const CategoryRouter = express.Router();

CategoryRouter.route("/").get(CategoryController.getCategory);
CategoryRouter.post(
  "/add",
  body("name").isLength({ min: 2 }),
  CategoryController.createCategory
);
CategoryRouter.patch("/:id", CategoryController.updateCategory);
CategoryRouter.delete("/:id", CategoryController.DeleteCategory);

module.exports = CategoryRouter;
