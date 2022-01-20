var Product = require("../models/Product");
const mongoose = require("mongoose");
const { body, validationResult } = require("express-validator");

const getProduct = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(404).json({ message: error.message() });
  }
};

const createProduct = async (req, res) => {
  var newProduct = new Product();
  newProduct.experationDate = req.body.experationDate;
  newProduct.category = req.body.category;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    try {
      await newProduct.save();
      return res.status(200).json(newProduct);
    } catch (err) {
      console.error(err);
    }
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, ingredients } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Product Found ! ");

  const updatedProduct = { name, description, ingredients, _id: id };

  await Product.findByIdAndUpdate(id, updatedProduct, { new: true });
  res.json(updatedProduct);
};

const DeleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Product Found with id : ${id} ");

  await Product.findByIdAndRemove(id);
  res.json({ message: "Product deleted successfully." });
};

module.exports = { getProduct, createProduct, updateProduct, DeleteProduct };
