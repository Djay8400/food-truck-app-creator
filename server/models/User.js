const mongoose = require("mongoose");

const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const Order = require("./Order");
const Product = require("./Product");

const userSchema = new Schema({
  firstName: {
    type: String,
    // required: true,
    trim: true,
  },
  lastName: {
    type: String,
    // required: true,
    trim: true,
  },
  username: {
    type: String,
    // required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    // required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    // required: true,
    minlength: 5,
  },
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
  // secondaryColor: {
  //   type: String,

  //   trim: true,
  // },
  // font: {
  //   type: String,
  //   // required: true,
  //   trim: true,
  // },
  logo: {
    imageURL: String,
  },
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  products: [Product.schema],
  orders: [Order.schema],
});

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
