const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: { type: String },
  description: { type: String },
  experationDate: { type: Date },
  ingredients: [
    {
      name: { type: String },
      weight: { type: String },
      calories: { type: String },
    },
  ],
});

module.exports = mongoose.model("product", ProductSchema);
