import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import {
    BOARD_COLOR,
    GRID_COLOR,
    CELL_COLOR,
    CELL_SIZE,
    CELL_BORDER,
} from "./GameOfLife.constants";

export const Board = styled.svg`
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

export const Cell = ({ x, y, n }) => (
    <rect
        {...{
            x: CELL_SIZE * x + CELL_BORDER,
            y: CELL_SIZE * y + CELL_BORDER,
            rx: CELL_SIZE,
            ry: CELL_SIZE,
            fill: CELL_COLOR,
            width: CELL_SIZE - CELL_BORDER * 2,
            height: CELL_SIZE - CELL_BORDER * 2,
            style: {
                opacity: (n + 1) / 4,
            },
        }}
    />
);

Cell.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    n: PropTypes.number.isRequired,
};
