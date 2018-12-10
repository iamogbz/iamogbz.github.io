import styled from "styled-components";

import {
    BOARD_COLOR,
    GRID_COLOR,
    CELL_COLOR,
    CELL_SIZE,
    CELL_BORDER,
} from "./GameOfLife.constants";

export const Board = styled.div`
    width: 100%;
    height: 100%;
    position: ${({ fixed }) => (fixed ? "fixed" : "relative")};
    margin: 0 auto;
    background-color: ${BOARD_COLOR};
    background-image: linear-gradient(
            ${GRID_COLOR} ${CELL_BORDER}px,
            transparent ${CELL_BORDER}px
        ),
        linear-gradient(
            90deg,
            ${GRID_COLOR} ${CELL_BORDER}px,
            transparent ${CELL_BORDER}px
        );
    background-size: ${CELL_SIZE}px ${CELL_SIZE}px;
    overflow: hidden;
`;

export const Cell = styled.div.attrs(({ x, y, n }) => ({
    style: {
        left: `${CELL_SIZE * x + CELL_BORDER}px`,
        top: `${CELL_SIZE * y + CELL_BORDER}px`,
        opacity: (n + 1) / 4,
    },
}))`
    position: absolute;
    width: ${CELL_SIZE - CELL_BORDER * 2}px;
    height: ${CELL_SIZE - CELL_BORDER * 2}px;
    background-color: ${CELL_COLOR};
    border-radius: 100%;
`;
