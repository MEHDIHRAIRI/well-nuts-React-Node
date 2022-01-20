const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  experationDate: { type: Date },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  location: { type: String },
});

module.exports = mongoose.model("product", ProductSchema);
