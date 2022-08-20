import { gql } from "@apollo/client";

export const GET_PEOPLE = gql`
  query GetPeople($page: Int) {
    getPeople(page: $page) {
      count
      next
      previous
      results {
        name
        height
        mass
        gender
        homeworld
      }
    }
  }
`;

export const GET_PERSON = gql`
  query GetPersonByName($name: String!) {
    getPersonByName(name: $name) {
      name
      mass
      gender
      height
      homeworld
    }
  }
`;
