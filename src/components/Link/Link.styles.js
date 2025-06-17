import styled from "styled-components";

const animTime = "0.1s";
const getStylePropWrapper = fn => {
    return props => fn(props._styles);
};
const getWidth = getStylePropWrapper(style => style.width);
const getHeight = getStylePropWrapper(style => style.height);
const getFontSize = getStylePropWrapper(style => style.fontSize);
const getBgColor = getStylePropWrapper(style => style.backgroundColor);
const getBorderColor = getStylePropWrapper(style => style.borderColor);
const getBorderWidth = getStylePropWrapper(style => style.borderWidth);
const getButtonWidth = getStylePropWrapper(style => style.buttonWidth);
const getButtonHeight = getStylePropWrapper(style => style.buttonHeight);
const getActiveColor = getStylePropWrapper(style => style.fontColors.active);
const getHoverColor = getStylePropWrapper(style => style.fontColors.hover);
const getInitialColor = getStylePropWrapper(style => style.fontColors.initial);

const lineBorderPsuedoElem = props => `
    content: "";
    position: absolute;
    transition: ease ${animTime} all;
    width: ${getButtonWidth(props)};
`;

export const AnimatedBorderedLinkWrapper = styled.span`
    background-color: ${getBgColor};
    height: ${getHeight};
    width: ${getWidth};

    justify-content: center;
    align-items: center;
    display: inline-flex;
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
        color: ${props => {
            const { active } = props;
            return active ? getActiveColor(props) : getInitialColor(props);
        }};
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
