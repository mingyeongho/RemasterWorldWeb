import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    // Type policy map
    Country: {
      fields: {
        isLike: {
          // Field policy for the isLike field
          read(_, { readField }) {
            // The read function for the isLike field

            const currCode = readField({ fieldName: "code" });

            if (!(typeof window !== undefined)) return;

            const getLikeCountries = localStorage.getItem("likeCountries");

            if (!getLikeCountries) return false;

            const parseGetLikeCountries: string[] =
              JSON.parse(getLikeCountries);

            if (typeof currCode === "string") {
              return parseGetLikeCountries.includes(currCode);
            }

            return false;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache,
});

export default client;
