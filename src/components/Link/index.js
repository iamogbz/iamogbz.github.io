import React from "react";
import PropTypes from "prop-types";
import { Link as ReactRouterLink } from "react-router-dom";
import pick from "lodash/pick";

import { Colors } from "utils/constants";
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
    borderWidth: PropTypes.string,
    /** Link button css width */
    buttonWidth: PropTypes.string,
    /** Link button height */
    buttonHeight: PropTypes.string,
    /** Link colors in various contexts */
    fontColors: PropTypes.shape({
        active: PropTypes.string,
        hover: PropTypes.string,
        initial: PropTypes.string,
    }),
    /** Link css font size */
    fontSize: PropTypes.string,
    /** If specified native html a link is used */
    href: PropTypes.string,
    /** HTML link target attribute */
    target: PropTypes.string,
    /** If specified react router Link is user */
    to: PropTypes.string,
};

Link.defaultProps = {
    backgroundColor: "transparent",
    borderColor: Colors.DARK,
    borderWidth: "8px",
    buttonWidth: "128px",
    buttonHeight: "64px",
    fontColors: {
        active: Colors.LIGHT,
        hover: Colors.ACTIVE,
        initial: Colors.DARK,
    },
    fontSize: "1.8vmax",
    href: null,
    target: "_self",
    to: null,
};

export default Link;
