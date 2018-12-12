import styled from "styled-components";

const lineAnim = "dash 2s ease-in-out infinite forwards";

export const SVGWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-contents: center;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    svg {
        width: 100%;
        height: 100%;
    }
    .animline {
        stroke-dasharray: 50;
        stroke-dashoffset: 50;
        animation: ${lineAnim};
    }
    @keyframes dash {
        to {
            stroke-dashoffset: -50;
        }
    }
    #circle {
        transform-origin: center;
        transform: rotate(0deg);
        animation: ${lineAnim}, spin 2s linear infinite;
    }
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;
