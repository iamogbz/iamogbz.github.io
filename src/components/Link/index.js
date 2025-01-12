import React from "react";
import PropTypes from "prop-types";
import { Link as ReactRouterLink } from "react-router-dom";
import pick from "lodash/pick";

import { Colors } from "utils/constants";
import { AnimatedBorderedLinkWrapper } from "./Link.styles";

function Link(props) {
    const linkProps = pick(props, ["children", "target", "to"]);
    const borderStyleProps = pick(props, [
        "active",
        "backgroundColor",
        "borderColor",
        "borderWidth",
        "buttonWidth",
        "buttonHeight",
        "className",
        "fontColors",
        "fontSize",
        "style",
        "width",
        "height",
    ]);
    if (linkProps.to?.startsWith("http")) {
        Object.assign(linkProps, {
            href: linkProps.to,
            target: "_blank",
            to: null,
        });
    }
    return (
        <AnimatedBorderedLinkWrapper {...borderStyleProps}>
            {linkProps.href ? (
                <a {...linkProps}>{props.children}</a>
            ) : (
                <ReactRouterLink {...linkProps} />
            )}
        </AnimatedBorderedLinkWrapper>
    );
}

Link.propTypes = {
    /** Controls if link is rendered as active */
    active: PropTypes.bool,
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
    /** Wrapper width */
    width: PropTypes.string,
    /** Wrapper height */
    height: PropTypes.string,
};

Link.defaultProps = {
    active: false,
    backgroundColor: Colors.NONE,
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
    width: "auto",
    height: "auto",
};

export default Link;
