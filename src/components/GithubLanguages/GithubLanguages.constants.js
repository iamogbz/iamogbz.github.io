export const GRAPH_QUERY = `query getLangs($repoCount:Int!, $langCount:Int!) {
    viewer {
        name
        repositories(last: $repoCount) {
            nodes {
                name
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
            }
        }
    }
}`;
