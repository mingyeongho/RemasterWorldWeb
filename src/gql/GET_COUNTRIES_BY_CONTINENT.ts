import { gql } from "@apollo/client";

export const GET_COUNTRIES_BY_CONTINENT = gql`
  query GetCountries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      code
      name
      continent {
        code
        name
      }
      languages {
        code
        name
        native
        rtl
      }
      emoji
      isLike @client
    }
  }
`;
