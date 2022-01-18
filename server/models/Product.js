const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
  menuItem: {
    type: String,
    // required: true,
    trim: true,
  },
  menuDescription: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    // required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
