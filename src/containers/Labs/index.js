import React from "react";
import styled from "styled-components";
import { Beaker } from "styled-icons/octicons";
import { TestTube } from "styled-icons/boxicons-regular";

import GameOfLife from "components/GameOfLife";

const Page = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const iconProps = {
    color: "white",
    size: "10vmax",
    style: { zIndex: 999 },
};

export default function() {
    return (
        <Page>
            <GameOfLife key="game-of-life" fixed />
            <Beaker {...iconProps} />
            <TestTube {...iconProps} />
        </Page>
    );
}
