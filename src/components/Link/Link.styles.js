import styled from "styled-components";

const animTime = "0.1s";
const getFontSize = ({ fontSize }) => `${fontSize}pt`;
const getBorderColor = ({ borderColor }) => `${borderColor}`;
const getBorderWidth = ({ borderWidth }) => `${borderWidth}px`;
const getButtonWidth = ({ buttonWidth }) => `${buttonWidth}px`;
const getButtonHeight = ({ buttonHeight }) => `${buttonHeight}px`;
const getActiveColor = ({ fontColors: { active } }) => active;
const getHoverColor = ({ fontColors: { hover } }) => hover;
const getInitialColor = ({ fontColors: { initial } }) => initial;

const lineBorderPsuedoElem = props => `
    content: "";
    position: absolute;
    transition: ease ${animTime} all;
    width: ${getButtonWidth(props)};
`;

export const AnimatedBorderedLinkWrapper = styled.span`
a {
    text-transform: uppercase;
    text-decoration: none;
    font-size: ${getFontSize};

    justify-content: center;
    align-items: center;
    display: inline-flex;
    margin: calc(${getBorderWidth} * 2);
    width: ${getButtonWidth};
    height: ${getButtonHeight};
    font-weight: bold;
    color: ${getInitialColor};
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
    transition: ${animTime} all ease;
    transition-delay: calc(${animTime} * 2);
    
    &:active {
        color: ${getActiveColor};
        background-color: ${getBorderColor};
    }

    &:hover {
        color: ${getHoverColor};
        background-size: 100% ${getBorderWidth};
        transition-delay: 0s;
    }

    /* side borders */
    &::before {
        ${lineBorderPsuedoElem}
        transition-delay: ${animTime};
        width: calc(${getButtonWidth} - ${getBorderWidth} * 2);
        border-left: solid ${getBorderWidth} ${getBorderColor};
        border-right: solid ${getBorderWidth} ${getBorderColor};
        height: 0;
        bottom: 0;
    }

    &:hover::before {
        transition-delay: ${animTime};
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
        transition-delay: calc(${animTime} * 2);
        width: 0;
        border-width: calc(${getButtonWidth} / 2);
    }
}
`;
