var Category = require("../models/Category");
const mongoose = require("mongoose");
const { body, validationResult } = require("express-validator");

const getCategory = async (req, res) => {
  try {
    const allCategorys = await Category.find();
    res.status(200).json(allCategorys);
  } catch (error) {
    res.status(404).json({ message: error.message() });
  }
};

const createCategory = async (req, res) => {
  var newCategory = new Category();
  newCategory.name = req.body.name;
  newCategory.description = req.body.description;
  newCategory.weight = req.body.weight;
  newCategory.calories = req.body.calories;
  newCategory.ingredients = req.body.ingredients;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    try {
      await newCategory.save();
      return res.status(200).json(newCategory);
    } catch (err) {
      console.error(err);
    }
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description, ingredients, weight, calories } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Category Found ! ");

  const updatedCategory = {
    name,
    description,
    ingredients,
    weight,
    calories,
    _id: id,
  };

  await Category.findByIdAndUpdate(id, updatedCategory, { new: true });
  res.json(updatedCategory);
};

const DeleteCategory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Category Found with id : ${id} ");

  await Category.findByIdAndRemove(id);
  res.json({ message: "Category deleted successfully." });
};

module.exports = {
  getCategory,
  createCategory,
  updateCategory,
  DeleteCategory,
};
