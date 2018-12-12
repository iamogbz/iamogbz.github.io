import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Beaker } from "styled-icons/octicons";
import { TestTube } from "styled-icons/boxicons-regular";
import { Colors, Zindex } from "utils/constants";
import GameOfLife from "components/GameOfLife";

const Page = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const iconProps = {
    color: Colors.LIGHT,
    size: "10vmax",
    style: { zIndex: Zindex.TOP },
};

export default function() {
    return (
        <Page>
            <Helmet>
                <title>Laboratory</title>
            </Helmet>
            <GameOfLife key="game-of-life" fixed />
            <Beaker {...iconProps} />
            <TestTube {...iconProps} />
        </Page>
    );
}
