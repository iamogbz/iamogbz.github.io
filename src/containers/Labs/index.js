import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { useMatches, useNavigate } from "react-router-dom";
import { Beaker } from "styled-icons/octicons";
import { TestTube } from "styled-icons/boxicons-regular";
import { Colors, Zindex } from "utils/constants";
import GameOfLife from "components/GameOfLife";
import { useGraphQuery } from "services/Github/useGraphQuery";
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import { GITHUB_KEY } from "containers/Profiles/Emmanuel/Emmanuel.constants";
import { PROJ_BLACKLIST, GRAPH_QUERY } from "./Labs.constants";
import {
    FullGrid,
    SelectWrapper,
    Option,
    Select,
    ProjectWrapper,
} from "./Labs.styles";

const xTo = (path, xSlug) => `${path.replace("/:experiment", "")}/${xSlug}`;

const xName = xSlug =>
    xSlug.substr(0, 1).toUpperCase() +
    xSlug.substr(1).replace(/-(\w)/g, ([, m]) => ` ${m.toUpperCase()}`);

function BrewingIcon() {
    return (
        <SelectWrapper height={0} style={{ zIndex: Zindex.TOP }}>
            <Beaker color={Colors.LIGHT} size="10vmax" />
            <TestTube
                color={Colors.LIGHT}
                size="6vmax"
                style={{
                    transform: "rotate(-135deg)",
                    position: "absolute",
                    top: "calc(50% - 12vmax)",
                    left: "6vmax",
                }}
            />
        </SelectWrapper>
    );
}

function Project({ markdown }) {
    if (!markdown) return <BrewingIcon />;
    return <ReactMarkdown plugins={[gfm]}>{markdown}</ReactMarkdown>;
}

Project.propTypes = {
    markdown: PropTypes.string,
};

Project.defaultProps = {
    markdown: null,
};

export default function Labs() {
    const navigate = useNavigate();
    const [match] = useMatches();
    const {
        pathname: path,
        params: { projectName },
    } = match;
    const data = useGraphQuery({
        authKey: GITHUB_KEY,
        graphQuery: GRAPH_QUERY,
        queryParams: {
            repoCount: 100,
            langCount: 0,
        },
    });
    const projects = React.useMemo(
        () =>
            keyBy(
                get(data, "viewer.repositories.nodes", []).filter(
                    repo =>
                        !PROJ_BLACKLIST.includes(repo.name) &&
                        !repo.isArchived &&
                        repo.stargazerCount > 0,
                ),
                "name",
            ),
        [data],
    );
    const projectMD =
        projects[projectName]?.README?.text ??
        projects[projectName]?.Readme?.text ??
        projects[projectName]?.readme?.text;

    return [
        <Helmet key="lab-helmet">
            <title>
                {projectName ? `${xName(projectName)}` : "Laboratory"}
            </title>
        </Helmet>,
        <GameOfLife key="game-of-life" fixed background darkMode />,
        <FullGrid key="lab-grid">
            <SelectWrapper>
                <Select
                    onChange={e => navigate(e.target.value)}
                    defaultValue={xTo(path, projectName)}
                >
                    <Option value="/labs">Choose a project</Option>
                    {Object.values(projects).map(({ name, description }) => (
                        <Option key={name} value={xTo(path, name)}>
                            {xName(name).toUpperCase()} ---- {description}
                        </Option>
                    ))}
                </Select>
            </SelectWrapper>
            <ProjectWrapper withContent={Boolean(projectMD)}>
                <Project markdown={projectMD} />
            </ProjectWrapper>
        </FullGrid>,
    ];
}
