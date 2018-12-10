import styled from "styled-components";

const animTime = "0.16";
const borderColor = "black";
const borderWidth = "8";
const buttonWidth = "120";
const buttonHeight = "80";

const getAnimTime = () => `${animTime}s`;
const getBorderColor = () => `${borderColor}`;
const getBorderWidth = () => `${borderWidth}px`;
const getButtonWidth = () => `${buttonWidth}px`;
const getButtonHeight = () => `${buttonHeight}px`;

const lineBorderPsuedoElem = props => `
    content: "";
    position: absolute;
    transition: ease ${getAnimTime(props)} all;
    width: ${getButtonWidth(props)};
`;

export const AnimatedBorderedLinkWrapper = styled.span`
    justify-content: center;
    align-items: center;
    display: inline-flex;
    margin: calc(${getBorderWidth} * 2);
    width: ${getButtonWidth};
    height: ${getButtonHeight};
    font-weight: bold;
    color: ${getBorderColor};
    margin: 0;
    padding: 0;
    position: relative;

    background-repeat: no-repeat;
    background-size: 50% ${getBorderWidth};
    background-position: bottom;
    background-image: linear-gradient(
        90deg,
        ${getBorderColor} 0%,
        ${getBorderColor} 100%
    );
    transition: ${getAnimTime} all ease;
    transition-delay: calc(${getAnimTime} * 2);

    a {
        text-transform: uppercase;
        text-decoration: none;
    }
    
    &:active {
        color: white;
        background-color: black;
    }

    &:hover {
        color: black;
        background-size: 100% ${getBorderWidth};
        transition-delay: 0s;
    }

    /* side borders */
    &::before {
        ${lineBorderPsuedoElem}
        transition-delay: ${getAnimTime};
        width: calc(${getButtonWidth} - ${getBorderWidth} * 2);
        border-left: solid ${getBorderWidth} ${getBorderColor};
        border-right: solid ${getBorderWidth} ${getBorderColor};
        height: 0;
        bottom: 0;
    }

    &:hover::before {
        transition-delay: ${getAnimTime};
        height: ${getButtonHeight};
    }

    /* top border */
    &::after {
        ${lineBorderPsuedoElem}
        transition-delay: 0s;
        border-left: solid 0 ${getBorderColor};
        border-right: solid 0 ${getBorderColor};
        height: ${getBorderWidth};
        top: 0;
        left: 0;
    }

    &:hover::after {
        transition-delay: calc(${getAnimTime} * 2);
        width: 0;
        border-width: calc(${getButtonWidth} / 2);
    }
`;
