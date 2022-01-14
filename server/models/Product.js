const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
  menuItem: {
    type: String,
    required: true,
    trim: true,
  },
  menuDescription: {
    type: String,
  },
  productImage: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  allergens: {
    type: String,
    trim: true,
  },
  //   quantity: {
  //     type: Number,
  //     min: 0,
  //     default: 0
  //   }
  //   category: {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Category',
  //     required: true
  //   }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
