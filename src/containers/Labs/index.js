import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Beaker } from "styled-icons/octicons";
import { TestTube } from "styled-icons/boxicons-regular";
import { Colors, Zindex } from "utils/constants";
import GameOfLife from "components/GameOfLife";
import Link from "components/Link";
import { FullGrid, CenteredCell } from "./Labs.styles";
import { EXPERIMENTS } from "./Labs.constants";

const xTo = (path, xSlug) => `${path.replace("/:experiment", "")}/${xSlug}`;

const xUrl = xSlug => `https://ogbizi.com/${xSlug}`;

const xName = xSlug =>
    xSlug.substr(0, 1).toUpperCase() +
    xSlug.substr(1).replace(/-(\w)/g, ([, m]) => ` ${m.toUpperCase()}`);

const Experiment = ({ experiment }) => (
    <iframe
        title={experiment}
        width="100%"
        height="100%"
        src={xUrl(experiment)}
        frame-ancestors="ogbizi.com github.com"
        style={{ border: "none", backgroundColor: "white" }}
    />
);

Experiment.propTypes = {
    experiment: PropTypes.string.isRequired,
};

export default function({
    match: {
        path,
        params: { experiment },
    },
}) {
    const linkText = content => {
        const style = { flexGrow: 1 };
        return <span style={style}>{content}</span>;
    };
    const brewingIcon = active => {
        const size = "24px";
        return (
            <Beaker
                color={active ? Colors.ACTIVE : Colors.DARK}
                size={size}
                style={{
                    justifySelf: "flex-end",
                    minWidth: size,
                    minHeight: size,
                    margin: "16px",
                }}
            />
        );
    };
    const emptyLabIcon = (
        <TestTube
            color={Colors.LIGHT}
            size="10vmax"
            style={{ zIndex: Zindex.TOP }}
        />
    );
    return [
        <Helmet key="lab-helmet">
            <title>{experiment ? `${xName(experiment)}` : "Laboratory"}</title>
        </Helmet>,
        <GameOfLife key="game-of-life" fixed background />,
        <FullGrid key="lab-grid">
            <CenteredCell width={4} fitContent>
                <FullGrid
                    columns={1}
                    gap="0"
                    style={{ maxWidth: "300px", minWidth: "240px" }}
                >
                    {Object.keys(EXPERIMENTS).map(x => {
                        const active = x === experiment;
                        const linkProps = {
                            backgroundColor: active
                                ? Colors.LIGHT
                                : "rgba(255,255,255,0.9)",
                            borderColor: Colors.NONE,
                            borderWidth: "0",
                            buttonWidth: "100%",
                            buttonHeight: "100%",
                            fontSize: "24px",
                            fontColors: {
                                initial: Colors.DARK,
                                hover: Colors.ACTIVE,
                                active: Colors.ACTIVE,
                            },
                            to: xTo(path, x),
                            width: "100%",
                            height: "100%",
                        };
                        return (
                            <CenteredCell key={x} width={1}>
                                <Link {...linkProps} active={active}>
                                    {linkText(xName(x))}
                                    {!EXPERIMENTS[x] && brewingIcon(active)}
                                </Link>
                            </CenteredCell>
                        );
                    })}
                </FullGrid>
            </CenteredCell>
            <CenteredCell width={8}>
                {experiment ? (
                    <Experiment experiment={experiment} />
                ) : (
                    emptyLabIcon
                )}
            </CenteredCell>
        </FullGrid>,
    ];
}
