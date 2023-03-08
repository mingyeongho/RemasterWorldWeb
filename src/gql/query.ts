import { gql } from "@apollo/client";

export const getAllSimpleCountries = gql`
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
      islike @client
    }
  }
`;

export const getCountry = ({ name }: { name: string }) => gql`
  {
    country(code: "${name}") {
      code
      name 
      native
      phone 
      continent {
        code 
        name 
      }
      capital 
      currency 
      languages {
        code 
        name 
        native 
        rtl
      }
      emoji 
      states {
        code 
        name 
      }
    }
  }
`;
