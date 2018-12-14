import styled, { createGlobalStyle } from "styled-components";

import { Grid, Cell } from "styled-css-grid";
import Image from "components/Image";

export const ProfileStyle = createGlobalStyle`
    html, body {
        color: #f8f8f8;
    }
    html {
        background: url("assets/images/background.jpg") no-repeat;
        background-size: cover;
    }
    body {
        background: rgba(0,0,0,0.8);
    }
`;

export const PageGrid = styled(Grid)`
    height: 100%;
    width: 100%;
`;

export const CenteredCell = styled(Cell)`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    justify-content: center;
    justify-self: stretch;
`;

export const RoundedImage = styled(Image)`
    border-radius: 100%;
`;

export const Title = styled.div`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2vmax;
    margin: 16px;
    letter-spacing: 2px;
`;

export const Subtitle = styled.div`
    text-transform: uppercase;
    font-size: 1.2vmax;
    color: #c8c8c8;
`;
