import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user {
    user {
      firstName
      lastName
      username
      email
      businessName
      homeAddress
      city
      state
      zipCode
      primaryColor
      logo
    }
  }
`;
//to get user info based off of their ID
export const QUERY_USER_INFO = gql`
query getUserInfo($user: ID) {
  user {
    firstName
      lastName
      username
      email
      businessName
      homeAddress
      city
      state
      zipCode
  }
}`

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;
