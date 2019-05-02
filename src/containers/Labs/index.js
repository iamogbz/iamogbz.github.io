import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Beaker } from "styled-icons/octicons";
import { TestTube } from "styled-icons/boxicons-regular";
import { Colors, Zindex } from "utils/constants";
import GameOfLife from "components/GameOfLife";
import Frame from "components/Frame";
import { FullGrid, CenteredCell, Option, Select } from "./Labs.styles";
import EXPERIMENTS from "./experiments.json";

const xTo = (path, xSlug) => `${path.replace("/:experiment", "")}/${xSlug}`;

const xUrl = xSlug => `https://ogbizi.com/${xSlug}`;

const xName = xSlug =>
    xSlug.substr(0, 1).toUpperCase() +
    xSlug.substr(1).replace(/-(\w)/g, ([, m]) => ` ${m.toUpperCase()}`);

const BrewingIcon = () => (
    <CenteredCell height={0} style={{ zIndex: Zindex.TOP }}>
        <Beaker color={Colors.LIGHT} size="10vmax" />
        <TestTube
            color={Colors.LIGHT}
            size="6vmax"
            style={{
                transform: "rotate(-135deg)",
                position: "absolute",
                top: "calc(50% - 12vmax)",
                left: "2vmax",
            }}
        />
    </CenteredCell>
);

const Experiment = ({ experiment }) => {
    if (!experiment) return <BrewingIcon />;
    return <Frame url={xUrl(experiment)} />;
};

Experiment.propTypes = {
    experiment: PropTypes.string,
};

Experiment.defaultProps = {
    experiment: null,
};

export default function({
    history,
    match: {
        path,
        params: { experiment },
    },
}) {
    return [
        <Helmet key="lab-helmet">
            <title>{experiment ? `${xName(experiment)}` : "Laboratory"}</title>
        </Helmet>,
        <GameOfLife key="game-of-life" fixed background darkMode />,
        <FullGrid key="lab-grid" rows={12} gap="0">
            <CenteredCell width={12} height={1} fitContent>
                <Select
                    onChange={e => history.push(e.target.value)}
                    defaultValue={xTo(path, experiment)}
                >
                    <Option value="/labs">Choose an experiment</Option>
                    {Object.keys(EXPERIMENTS).map(x => (
                        <Option key={x} value={xTo(path, x)}>
                            {xName(x)}
                        </Option>
                    ))}
                </Select>
            </CenteredCell>
            <CenteredCell width={12} height={11}>
                <Experiment experiment={experiment} />
            </CenteredCell>
        </FullGrid>,
    ];
}
