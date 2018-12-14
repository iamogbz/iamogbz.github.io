import styled from "styled-components";

export const BadgeWrapper = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 2.4vmax;
    border-radius: 0.2vmax;
    margin: 0.4vmax;
    padding: 0 0.6vmax;
    font-size: 1.2vmax;
    font-weight: bold;
    color: ${({ colors: { $ } }) => $.foreground};
    background-color: ${({ colors: { $ } }) => $.background};
    text-decoration: none;
    &:hover {
        color: ${({ colors: { hover } }) => hover.foreground};
        background-color: ${({ colors: { hover } }) => hover.background};
    }
`;

export const Spacer = styled.div`
    display: flex;
    height: 100%;
    width: 2px;
    margin: 0 0.4vmax;
    background-color: ${({ color }) => color};
`;
