import React from "react";
import GithubGraphQLClient from "./GraphQLClient";

/**
 * Fetches graph query results
 * @param {{ authKey: string, graphQuery: string, queryParams: Record<string, unknown> }} params
 */
export function useGraphQuery({ authKey, graphQuery, queryParams }) {
    /** @type [ReturnType<typeof React.useState<{ slug, description, numStars }[]>} */ const [
        result,
        setResult,
    ] = React.useState(null);

    const client = useGraphQLClient(authKey);

    React.useEffect(() => {
        let isCancelled = false;
        client.request(graphQuery, queryParams).then(data => {
            if (isCancelled) return;
            setResult(data);
        });
        return () => {
            isCancelled = true;
        };
    }, [client, graphQuery]);

    return result;
}

/**
 * Create one shot GithubGraphQLClient
 * @param {string} authKey github token
 * @returns {GithubGraphQLClient}
 */
function useGraphQLClient(authKey) {
    return React.useMemo(
        () =>
            GithubGraphQLClient({
                headers: {
                    Authorization: `Bearer ${authKey}`,
                },
            }),
        [authKey],
    );
}
