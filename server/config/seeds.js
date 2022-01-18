const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Burgers and More" },
    { name: "Sides" },
    { name: "Drinks" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      menuItem: "Bacon Cheese Burger",
      menuDescription: "A good ass burger",
      image: "burgerPic.jpg",
      category: categories[0]._id,
      price: 8.99,
    },
    {
      menuItem: "Fries",
      menuDescription: "Some good ass fries",
      image: "fries.jpg",
      category: categories[1]._id,
      price: 3.99,
    },
    {
      menuItem: "Soda",
      category: categories[2]._id,
      menuDescription: "some good ass soda",
      image: "sodaPic.jpg",
      price: 1.99,
    },

    {
      menuItem: "Nachos",
      category: categories[1]._id,
      menuDescription: "some good ass nachos",
      image: "nachosPic.jpg",
      price: 5.99,
    },

    {
      menuItem: "Water",
      category: categories[2]._id,
      menuDescription: "some good ass water",
      image: "waterBottlePic.jpg",
      price: 1.59,
    },

    {
      menuItem: "Eggroll",
      category: categories[1]._id,
      menuDescription: "some good ass eggrolls",
      image: "eggrollPic.jpg",
      price: 2.99,
    },

    {
      menuItem: "Chicken Strips",
      category: categories[0]._id,
      menuDescription: "some good ass chicken",
      image: "chickenStripPic.jpg",
      price: 7.99,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    username: "samadams123",
    email: "samadams@testmail.com",
    password: "password123",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    username: "DenisArce44",
    email: "Denis@testmail.com",
    password: "password123",
  });

  console.log("users seeded");

  process.exit();
});
