import { GraphQLClient } from "graphql-request";

export default function(options = {}) {
    return new GraphQLClient("https://api.github.com/graphql", options);
}
