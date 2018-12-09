import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body {
        border: none;
        margin: 0;
        padding: 0;
    }
    body {
        background: ${({ dark }) => (dark ? "black" : "white")};
        color: ${({ dark }) => (dark ? "white" : "black")};
    }
`;
