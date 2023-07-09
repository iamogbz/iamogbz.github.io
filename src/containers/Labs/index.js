import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { useMatches } from "react-router-dom";
import { Colors, Zindex } from "utils/constants";
import GameOfLife from "components/GameOfLife";
import Link from "components/Link";
import Logo from "components/Logo";
import { useGraphQuery } from "services/Github/useGraphQuery";
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import { GITHUB_KEY } from "containers/Profiles/Emmanuel/Emmanuel.constants";
import { OpenInNew } from "styled-icons/material";
import {
    CLS_PROJECT_SELECTED,
    PROJ_BLACKLIST,
    GRAPH_QUERY,
} from "./Labs.constants";
import {
    FullGrid,
    LoadingEllipsis,
    SelectWrapper,
    Option,
    Select,
    ProjectWrapper,
} from "./Labs.styles";

const xTo = (path, xSlug) => `${path.replace("/:experiment", "")}/${xSlug}`;

const xName = xSlug =>
    xSlug.substr(0, 1).toUpperCase() +
    xSlug.substr(1).replace(/-(\w)/g, ([, m]) => ` ${m.toUpperCase()}`);

function Project({ markdown, url }) {
    if (!markdown) return <Link href="/"><Logo size={128} /></Link>;
    return (
        <>
            <ReactMarkdown plugins={[gfm]} allowDangerousHtml>
                {markdown}
            </ReactMarkdown>
            <Link
                href={url}
                target="_blank"
                backgroundColor={Colors.ACTIVE}
                borderColor={Colors.LIGHT}
                fontColors={{
                    initial: Colors.LIGHT,
                    active: Colors.DARK,
                }}
                fontSize="12px"
                buttonHeight="48px"
                buttonWidth="48px"
                borderWidth="0"
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                }}
                title="View source code"
                tabIndex={0}
            >
                <OpenInNew color={Colors.LIGHT} size="24px" />
            </Link>
        </>
    );
}

Project.propTypes = {
    markdown: PropTypes.string,
    url: PropTypes.string,
};

Project.defaultProps = {
    markdown: null,
    url: null,
};

export default function Labs() {
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
                get(data, "viewer.repositories.nodes", [])
                    .map(repo => ({
                        ...repo,
                        readmeText:
                            repo?.README?.text ??
                            repo?.Readme?.text ??
                            repo?.readme?.text,
                    }))
                    .filter(
                        repo =>
                            !PROJ_BLACKLIST.includes(repo.name) &&
                            !repo.isArchived &&
                            repo.readmeText &&
                            repo.stargazerCount > 0,
                    ),
                "name",
            ),
        [data],
    );

    React.useEffect(() => {
        document.getElementById(projectName)?.scrollIntoView({
            block: "center",
            inline: "center",
        });
    }, [projects, projectName]);

    return [
        <Helmet key="lab-helmet">
            <title>
                {projectName ? `${xName(projectName)}` : "Laboratory"}
            </title>
        </Helmet>,
        <GameOfLife key="game-of-life" fixed background darkMode />,
        <FullGrid key="lab-grid">
            <SelectWrapper>
                <Select>
                    <Option
                        to="/labs"
                        style={{
                            flexGrow: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            flexDirection: "column",
                            transition: "all 0.3s ease-in-out",
                        }}
                    >
                        {Object.keys(projects).length ? (
                            <>
                                <p>CLICK TO CLOSE PROJECT</p>
                                <p>scroll to view more 👉🏾</p>
                            </>
                        ) : (
                            <LoadingEllipsis>LOADING PROJECTS</LoadingEllipsis>
                        )}
                    </Option>
                    {Object.values(projects).map(
                        ({ name, descriptionHTML }) => (
                            <Option
                                id={name}
                                key={name}
                                to={xTo(path, name)}
                                className={
                                    name === projectName
                                        ? CLS_PROJECT_SELECTED
                                        : ""
                                }
                            >
                                <p>{xName(name).toUpperCase()}</p>
                                <p
                                    // eslint-disable-next-line react/no-danger
                                    dangerouslySetInnerHTML={{
                                        __html: descriptionHTML,
                                    }}
                                />
                            </Option>
                        ),
                    )}
                </Select>
            </SelectWrapper>
            <ProjectWrapper withContent={Boolean(projects[projectName])}>
                <Project
                    markdown={projects[projectName]?.readmeText}
                    url={projects[projectName]?.url}
                />
            </ProjectWrapper>
        </FullGrid>,
    ];
}
