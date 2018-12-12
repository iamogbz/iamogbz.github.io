import { createGlobalStyle } from "styled-components";
import { Colors } from "utils/constants";

export const GlobalStyle = createGlobalStyle`
    html, body {
        border: none;
        margin: 0;
        padding: 0;
        font-family: Roboto, Helvetica, Arial;
    }
    body {
        background: ${({ dark }) => (dark ? Colors.DARK : Colors.LIGHT)};
        color: ${({ dark }) => (dark ? Colors.LIGHT : Colors.DARK)};
        min-width: 768px;
    }
`;
