import { gql } from "@apollo/client";

export const getAllCountries = gql`
  {
    countries {
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
    }
  }
`;
