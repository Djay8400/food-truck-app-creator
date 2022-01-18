import { gql } from "@apollo/client";

export const QUERY_USER = gql`
{
  user {
    email
    username
    orders {
      _id
      createdAt
      products {
        _id
        menuItem
        menuDescription
        price
        image
      }
    }
  }
}`


export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      menuItem
      menuDescription
      price
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

/////////// original QUERY ALL /////////////

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      menuItem
      menuDescription
      price
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;
