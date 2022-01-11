const mongoose = require("mongoose");
const Product = require("./Product");
const { Schema } = mongoose;

const orderSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  //   total: {
  //     type: Number,
  //   }
  products: [Product.schema],
});

orderSchema.virtual("total").get(function () {
  const reducer = (previousValue, currentValue) =>
    previousValue.price + currentValue.price;

  return this.products.reduce(reducer);
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
