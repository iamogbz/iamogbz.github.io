import styled from "styled-components";

import { CELL_SIZE, CELL_BORDER } from "./GameOfLife.constants";

export const Board = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    margin: 0 auto;
    background-color: #000;
    background-image: linear-gradient(
            #333 ${CELL_BORDER}px,
            transparent ${CELL_BORDER}px
        ),
        linear-gradient(
            90deg,
            #333 ${CELL_BORDER}px,
            transparent ${CELL_BORDER}px
        );
    background-size: ${CELL_SIZE}px ${CELL_SIZE}px;
    overflow: hidden;
`;

export const Cell = styled.div`
    position: absolute;
    left: ${({ x }) => CELL_SIZE * x + CELL_BORDER}px;
    top: ${({ y }) => CELL_SIZE * y + CELL_BORDER}px;
    width: ${CELL_SIZE - CELL_BORDER * 2}px;
    height: ${CELL_SIZE - CELL_BORDER * 2}px;
    background-color: #fff;
    border-radius: 100%;
`;
