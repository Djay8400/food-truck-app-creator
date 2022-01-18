const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
    businessName: {
        type: String,
        // required: true,
        trim: true,
      },
      homeAddress: {
        type: String,
        // required: true,
        trim: true,
      },
    
      city: {
        type: String,
        // required: true,
        trim: true,
      },
    
      state: {
        type: String,
        // required: true,
        trim: true,
      },
    
      zipCode: {
        type: String,
        trim: true,
      },
    
      primaryColor: {
        type: String,
    
        trim: true,
      },
      logo: {
        type: String,
        // imageURL: String,
      },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ]
});

const FoodTruck = mongoose.model("FoodTruck", orderSchema);

module.exports = FoodTruck;