const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    orders: [Order]
  }
  
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    menuItem: String
    menuDescription: String
    image: String
    price: Float
    category: Category
  }

 

  type Order {
    _id: ID
    createdAt: String
    products: [Product]
  }

  type Query {
    categories: [Category]
    user: User
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Mutation {
    addUser(username: String!, password: String!, confirmPassword: String, email: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;