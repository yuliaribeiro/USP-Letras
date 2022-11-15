import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
	uri: "https://api-sa-east-1.hygraph.com/v2/claefqu6l043f01t96jglc8pa/master",
	cache: new InMemoryCache(),
});
