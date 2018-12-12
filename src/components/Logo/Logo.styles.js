import styled from "styled-components";

const pathAnim = "dash 2s ease-in-out infinite forwards";

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
    path {
        stroke-dasharray: 50;
        stroke-dashoffset: 50;
        animation: ${pathAnim};
    }
    @keyframes dash {
        to {
            stroke-dashoffset: -50;
        }
    }
    #circle {
        transform-origin: center;
        transform: rotate(0deg);
        animation: ${pathAnim}, spin ${1 + 3 * Math.random()}s linear infinite;
    }
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;
