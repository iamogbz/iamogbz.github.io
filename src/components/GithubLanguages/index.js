import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import GithubGraphQLClient from "services/Github/GraphQLClient";
import { GRAPH_QUERY } from "./GithubLanguages.constants";

export default class GithubLanguages extends React.PureComponent {
    propTypes = {
        authKey: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
        const { authKey } = this.props;
        this.state = {};
        this.client = GithubGraphQLClient({
            headers: {
                Authorization: `Bearer ${authKey}`,
            },
        });
        this.client
            .request(GRAPH_QUERY, {
                repoCount: 100,
                langCount: 10,
            })
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
