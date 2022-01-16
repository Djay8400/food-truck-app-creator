const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await User.deleteMany();
  await User.create({
    username: 'WillU23',
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345',
  });
  await User.create({
    username: 'samadams11',
    firstName: 'Sam',
    lastName: 'Adams',
    email: 'sadam@testmail.com',
    password: 'password12345',
  });

  console.log('users seeded');

  process.exit();
});
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