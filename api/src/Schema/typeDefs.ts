import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Person {
    name: String!
    height: Int!
    mass: String!
    gender: String!
    homeworld: String!
  }

  type GetPeopleResponse {
    count: Int!
    next: String
    previous: String
    results: [Person!]!
  }

  type Query {
    getPeople(page: Int): GetPeopleResponse!
    getPerson(search: String!): Person!
  }
`;
