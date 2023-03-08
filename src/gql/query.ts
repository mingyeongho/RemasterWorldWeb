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
      isLike @client
    }
  }
`;

export const getCountries = ({ continent }: { continent: string }) => gql`
  {
    countries(filter: {
        continent: {
            eq: "${continent}"
        }
    }) {
      code
      name
      continent {
        code
        name
      }
      languages {
        code
        name
      }
      emoji
      isLike @client
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
