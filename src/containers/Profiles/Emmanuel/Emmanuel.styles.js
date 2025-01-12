import styled, { createGlobalStyle } from "styled-components";
import { Grid, Cell } from "styled-css-grid";
import Image from "components/Image";
import { Colors } from "utils/constants";

export const ProfileStyle = createGlobalStyle`
    html, body {
        color: ${Colors.LIGHT};
    }
    html {
        background: url("assets/images/background.jpg") no-repeat;
        background-color: black;
        background-size: cover;
    }
    body {
        background-color: color-mix(in srgb, ${Colors.DARK} 80%, transparent);
    }
`;

export const PageGrid = styled(Grid)`
    height: 100%;
    width: 100%;
    min-height: max(768px, 50vmax);
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
    color: ${Colors.LIGHT};
`;
