// https://docs.github.com/en/graphql/overview/explorer
export const GRAPH_QUERY = `query getLangs($repoCount:Int!, $langCount:Int!) {
    viewer {
        name
        login
        repositories(first: $repoCount, orderBy: {field: STARGAZERS, direction: DESC}) {
            nodes {
                name
                description
                url
                isArchived
                isPrivate
                stargazerCount
                languages(last: $langCount) {
                    totalCount
                    totalSize
                    edges {
                        size
                        node {
                            name
                        }
                    }
                }
                README: object(expression: "HEAD:README.md") {
                    ... on Blob {
                        id
                        text
                    }
                }
                Readme: object(expression: "HEAD:Readme.md") {
                    ... on Blob {
                        id
                        text
                    }
                }
                readme: object(expression: "HEAD:readme.md") {
                    ... on Blob {
                        id
                        text
                    }
                }
            }
        }
    }
}`;

export const LANG_BLACKLIST = [
    "css",
    "dockerfile",
    "html",
    "makefile",
    "shell",
];
