import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import { Colors } from "utils/constants";
import { useGraphQuery } from "services/Github/useGraphQuery";
import LanguageBadge from "components/LanguageBadge";
import { LANG_BLACKLIST, GRAPH_QUERY } from "./GithubLanguages.constants";

const getUserUrl = user => `https://github.com/${user.toLowerCase()}`;

function GithubLanguages({ authKey }) {
    const data = useGraphQuery({
        authKey,
        graphQuery: GRAPH_QUERY,
        queryParams: {
            repoCount: 100,
            langCount: 10,
        },
    });

    const getLanguageReposUrl = React.useCallback(
        lang => {
            const userUrl = getUserUrl(get(data, "viewer.login", "404"));
            return `${userUrl}?tab=repositories&language=${lang
                .replace(" ", "+")
                .toLowerCase()}`;
        },
        [data],
    );

    const languageDistribution = React.useMemo(() => {
        if (!data) return { total: 0, types: {} };

        const langs = { total: 0, types: {} };
        get(data, "viewer.repositories.nodes", []).forEach(repo => {
            get(repo, "languages.edges", []).forEach(lang => {
                const {
                    size,
                    node: { name },
                } = lang;
                if (!langs.types[name]) {
                    langs.types[name] = {
                        size: 0,
                        url: getLanguageReposUrl(name),
                    };
                }
                langs.types[name].size += size;
                langs.total += size;
            });
        });
        return langs;
    }, [data, getLanguageReposUrl]);

    if (!data) {
        return null; // Or a loading indicator
    }

    const { total, types } = languageDistribution;
    const colors = {
        $: {
            foreground: Colors.DARK,
            background: `color-mix(in srgb, ${Colors.LIGHT} 70%, transparent)`,
        },
        hover: {
            background: `color-mix(in srgb, ${Colors.LIGHT} 90%, transparent)`,
        },
    };
    const sortedDists = Object.entries(types).sort(
        ([, a], [, b]) => b.size - a.size,
    );

    return sortedDists.map(([name, { size, url }]) => {
        const showUrlLink = !LANG_BLACKLIST.includes(name.toLowerCase());
        return (
            <LanguageBadge
                name={name}
                key={name}
                numerator={size}
                denominator={total}
                url={showUrlLink ? url : null}
                colors={colors}
            />
        );
    });
}

GithubLanguages.propTypes = {
    authKey: PropTypes.string.isRequired,
};

export default React.memo(GithubLanguages);
