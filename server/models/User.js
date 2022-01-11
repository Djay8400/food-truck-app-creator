const mongoose = require("mongoose");

const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const Order = require("./Order");
const Product = require("./Product");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  businessName: {
    type: String,
    required: true,
    trim: true,
  },
  homeAddress: {
    type: String,
    required: true,
    trim: true,
  },
  primaryColor: {
    type: String,
    required: true,
    trim: true,
  },
  secondaryColor: {
    type: String,
    required: true,
    trim: true,
  },
  font: {
    type: String,
    required: true,
    trim: true,
  },
  // logo: {},
  // imageURL: String,
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
