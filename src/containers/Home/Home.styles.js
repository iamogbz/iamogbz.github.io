import styled from "styled-components";
import { Grid, Cell } from "styled-css-grid";

export const FullPageGrid = styled(Grid)`
    height: 100%;
    width: 100%;
    background: black;
`;

export const CenteredCell = styled(Cell)`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    justify-self: stretch;
`;
