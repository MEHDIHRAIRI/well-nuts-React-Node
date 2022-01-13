const express = require("express");
const productController = require("../controllers/Product");

const { body, validationResult } = require("express-validator");
const ProductRouter = express.Router();

ProductRouter.route("/").get(productController.getProduct);
ProductRouter.post(
  "/add",
  body("name").isLength({ min: 2 }),
  productController.createProduct
);
ProductRouter.patch("/:id", productController.updateProduct);
ProductRouter.delete("/:id", productController.DeleteProduct);

module.exports = ProductRouter;
