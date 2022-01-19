import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;




export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $confirmPassword: String!) {
    addUser(username: $username, email: $email, password: $password, confirmPassword: $confirmPassword) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      createdAt
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
  }
`;
