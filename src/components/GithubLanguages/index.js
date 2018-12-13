import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import { GraphQLClient } from "graphql-request";

const endpoint = "https://api.github.com/graphql";
const query = `query getLangs($repoCount:Int!, $langCount:Int!) {
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
const variables = {
    repoCount: 100,
    langCount: 10,
};

export default class GithubLanguages extends React.PureComponent {
    propTypes = {
        authKey: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
        const { authKey } = this.props;
        this.state = {};
        this.client = new GraphQLClient(endpoint, {
            headers: {
                Authorization: `Bearer ${authKey}`,
            },
        });
        this.client
            .request(query, variables)
            .then(data => this.setState({ data }));
    }

    get languageDistribution() {
        const { data } = this.state;
        const langs = { total: 0, types: {} };
        get(data, "viewer.repositories.nodes", []).forEach(repo => {
            get(repo, "languages.edges", []).forEach(lang => {
                const {
                    size,
                    node: { name },
                } = lang;
                if (!langs.types[name]) {
                    langs.types[name] = 0;
                }
                langs.types[name] += size;
                langs.total += size;
            });
        });
        return langs;
    }

    render() {
        console.log(this.languageDistribution);
        return null;
    }
}
