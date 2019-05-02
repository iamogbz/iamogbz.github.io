import styled from "styled-components";
import { Grid, Cell } from "styled-css-grid";

export const FullGrid = styled(Grid)`
    height: 100%;
    width: 100%;
    min-height: 480px;
`;

export const CenteredCell = styled(Cell)`
    display: flex;
    position: relative;
    text-align: center;
    align-items: center;
    justify-content: center;
    justify-self: stretch;
`;

const optionFontSize = "1.2em";
export const Option = styled.option``;
export const Select = styled.select`
    font-size: ${optionFontSize};

    ${Option} {
        font-size: ${optionFontSize};
    }
`;
