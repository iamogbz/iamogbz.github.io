import { createGlobalStyle } from "styled-components";
import { Colors } from "utils/constants";

export const GlobalStyle = createGlobalStyle`
    html, body {
        border: none;
        margin: 0;
        padding: 0;
        font-family: Roboto, Helvetica, Arial;
        min-width: 768px;
        background-color: ${({ dark }) => (dark ? Colors.DARK : Colors.LIGHT)};
        color: ${({ dark }) => (dark ? Colors.LIGHT : Colors.DARK)};
        scroll-behaviour: smooth;
    }
`;
