import styled from "styled-components";
import { Grid, Cell } from "styled-css-grid";

export const FullPageGrid = styled(Grid)`
    min-height: 100%;
    width: 100%;
    background: url("assets/images/background.jpg") no-repeat;
    background-size: cover;

    /** This is configured for the HOME page only with 3 columns and the first cell being 3 col span */
    /* Dealing with single orphan */
    & > *:last-child:nth-child(3n - 1) {
        grid-column-end: -2;
    }
    /* Dealing with two orphan items */
    & > *:nth-last-child(2):nth-child(3n - 1) {
        grid-column-end: 2;
    }
    & > *:last-child:nth-child(3n) {
        grid-column-end: -1;
    }
`;

export const CenteredCell = styled(Cell)`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    justify-self: stretch;
`;
