const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    password: String
    email: String
  }

  type Product {
    _id: ID
    menuItem: String
    menuDescription: String
    productImage: String
    price: Float
    allergens: String
    order: Order
  }

  type Order {
    _id: ID
    createdAt: String
    products: [Product]
  }


  type Query {
    users: [User]
  }

  type Auth {
    token: ID
    user: User
  }

  type Mutation {
    addUser(username: String!, password: String!, email: String!): Auth

    updateUser(username: String, email: String, password: String): User

    login(email: String!, password: String!): Auth
  }
`;

// const typeDefs = gql`
//   type Category {
//     _id: ID
//     name: String
//   }


//   type User {
//     _id: ID
//     firstName: String
//     lastName: String
//     email: String
//     orders: [Order]
//   }

//   type Checkout {
//     session: ID
//   }

//   type Auth {
//     token: ID
//     user: User
//   }

//   type Query {
//     categories: [Category]
//     products(category: ID, name: String): [Product]
//     product(_id: ID!): Product
//     user: User
//     order(_id: ID!): Order
//     checkout(products: [ID]!): Checkout
//   }

//   type Mutation {
//     addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
//     addOrder(products: [ID]!): Order
//     updateUser(firstName: String, lastName: String, email: String, password: String): User
//     updateProduct(_id: ID!, quantity: Int!): Product
//     login(email: String!, password: String!): Auth
//   }
// `;

module.exports = typeDefs;
