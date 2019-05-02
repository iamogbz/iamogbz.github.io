import styled from "styled-components";

export const FrameContainer = styled.div`
    border: none;
    padding: 0;
    margin: 0;
    background-color: white;
    height: 100%;
    width: 100%;
    overflow: scroll;
    transition: opacity 0.2s ease-in-out;
    opacity: ${p => (p.visible ? 1 : 0)};

    color: initial;
    display: initial;
    position: initial;
    text-align: initial;
    align-items: initial;
    justify-content: initial;
    justify-self: initial;
`;
