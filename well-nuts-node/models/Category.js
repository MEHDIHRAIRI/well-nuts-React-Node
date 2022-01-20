const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: { type: String },
  description: { type: String },
  weight: { type: String },
  calories: { type: String },
  ingredients: [
    {
      name: { type: String },
      weight: { type: String },
      calories: { type: String },
    },
  ],
});

module.exports = mongoose.model("category", CategorySchema);
