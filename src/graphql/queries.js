import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          name
          ownerAvatarUrl
          description
          language
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`;

export const AUTHORIZED_USER = gql`
  {
    authorizedUser {
      id
      username
    }
  }
`;

export const GET_REPOSITORY = gql`
  query ($id: ID!) {
    repository(id: $id) {
      id
      name
      ownerAvatarUrl
      description
      language
      stargazersCount
      forksCount
      reviewCount
      ratingAverage
      url
    }
  }
`;

export const GET_REVIEWS = gql`
  query ($id: ID!) {
    repository(id: $id) {
      id
      fullName
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation ($review: CreateReviewInput!) {
    createReview(review: $review) {
      user {
        username
      }
      repositoryId
    }
  }
`;

export const CREATE_USER = gql`
  mutation ($user: CreateUserInput!) {
    createUser(user: $user) {
      id
      username
    }
  }
`;
