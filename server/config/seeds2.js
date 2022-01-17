const db = require("./connection");
const { User, Product } = require("../models");

db.once("open", async () => {
  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      menuItem: "Tin of Cookies",
      menuDescription:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      productImage: "cookie-tin.jpg",

      price: 2.99,
    },
    {
      menuItem: "Canned Coffee",
      menuDescription:
        "Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.",
      productImage: "canned-coffee.jpg",

      price: 1.99,
    },
    {
      menuItem: "Toilet Paper",

      menuDescription:
        "Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.",
      productImage: "toilet-paper.jpg",
      price: 7.99,
    },
    {
      menuItem: "Handmade Soap",

      menuDescription:
        "Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.",
      productImage: "soap.jpg",
      price: 3.99,
    },
    {
      menuItem: "Set of Wooden Spoons",

      menuDescription:
        "Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.",
      productImage: "wooden-spoons.jpg",
      price: 14.99,
    },
    {
      menuItem: "Camera",

      menuDescription:
        "Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.",
      productImage: "camera.jpg",
      price: 399.99,
    },
    {
      menuItem: "Tablet",

      menuDescription:
        "In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.",
      productImage: "tablet.jpg",
      price: 199.99,
    },
    {
      menuItem: "Tales at Bedtime",

      menuDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.",
      productImage: "bedtime-book.jpg",
      price: 9.99,
    },
    {
      menuItem: "Spinning Top",

      menuDescription:
        "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
      productImage: "spinning-top.jpg",
      price: 1.99,
    },
    {
      menuItem: "Set of Plastic Horses",

      menuDescription:
        "Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.",
      productImage: "plastic-horses.jpg",
      price: 2.99,
    },
    {
      menuItem: "Teddy Bear",

      menuDescription:
        "Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.",
      productImage: "teddy-bear.jpg",
      price: 7.99,
    },
    {
      menuItem: "Alphabet Blocks",

      menuDescription:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      productImage: "alphabet-blocks.jpg",
      price: 9.99,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
  });

  // await User.create({
  //   firstName: "Elijah",
  //   lastName: "Holt",
  //   email: "eholt@testmail.com",
  //   password: "password12345",
  // });

  console.log("users seeded");

  process.exit();
});

//////////////////////  OLD CODE /////////////////////////////

// const db = require('./connection');
// const { User, Product, Category } = require('../models');

// db.once('open', async () => {
//   await User.deleteMany();
//   await User.create({
//     username: 'WillU23',
//     firstName: 'Elijah',
//     lastName: 'Holt',
//     email: 'eholt@testmail.com',
//     password: 'password12345',
//     businessName: "Sam's Smokey BBQ",
//     homeAddress: "1212 Summer Dr.",
//     city: "San Antonio",
//     state: "Texas",
//     zipCode: "78258",
//     primaryColor: "Blue",
//     logo: "https://logourlexample.com",
//   });

//   console.log('users seeded');

//   process.exit();
// });
//typedef
// businessName: String
// homeAddress: String
// city: String
// state: String
// zipCode: String
// primaryColor: String
// logo: String
// orders: [Order]
// products: [Product]

// firstName
// lastName
// email
// businessName
// homeAddress
// city
// state
// zipCode
// primaryColor
// logo

// orders {
//   _id
//   createdAt
//   products {
//     _id
//     menuItem
//     menuDescription
//     productImage
//     price
//     allergens
//     order
//   }
// }
