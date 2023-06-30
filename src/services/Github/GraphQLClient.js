import { GraphQLClient } from "graphql-request";

export default function graphQLClient(options = {}) {
    return new GraphQLClient("https://api.github.com/graphql", options);
}
