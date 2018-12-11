import React from "react";
import PropTypes from "prop-types";
import { Link as ReactRouterLink } from "react-router-dom";
import pick from "lodash/pick";

import { AnimatedBorderedLinkWrapper } from "./Link.styles";

function Link(props) {
    const { href, children } = props;
    const linkProps = pick(props, ["children", "href", "target", "to"]);
    const borderStyleProps = pick(props, [
        "backgroundColor",
        "borderColor",
        "borderWidth",
        "buttonWidth",
        "buttonHeight",
        "className",
        "fontColors",
        "fontSize",
        "style",
    ]);
    return (
        <AnimatedBorderedLinkWrapper {...borderStyleProps}>
            {href ? (
                <a {...linkProps}>{children}</a>
            ) : (
                <ReactRouterLink {...linkProps} />
            )}
        </AnimatedBorderedLinkWrapper>
    );
}

Link.propTypes = {
    /** HTML element content */
    children: PropTypes.node.isRequired,
    /** CSS initial background color */
    backgroundColor: PropTypes.string,
    /** CSS border color */
    borderColor: PropTypes.string,
    /** CSS border thickness */
    borderWidth: PropTypes.number,
    /** Link button width in px */
    buttonWidth: PropTypes.number,
    /** Link button height in px */
    buttonHeight: PropTypes.number,
    /** Link colors in various contexts */
    fontColors: PropTypes.shape({
        active: PropTypes.string,
        hover: PropTypes.string,
        initial: PropTypes.string,
    }),
    /** Link font size in pt */
    fontSize: PropTypes.number,
    /** If specified native html a link is used */
    href: PropTypes.string,
    /** HTML link target attribute */
    target: PropTypes.string,
    /** If specified react router Link is user */
    to: PropTypes.string,
};

Link.defaultProps = {
    backgroundColor: "transparent",
    borderColor: "black",
    borderWidth: 8,
    buttonWidth: 128,
    buttonHeight: 64,
    fontColors: {
        active: "white",
        hover: "#2386F1",
        initial: "black",
    },
    fontSize: 18,
    href: null,
    target: "_blank",
    to: null,
};

export default Link;
