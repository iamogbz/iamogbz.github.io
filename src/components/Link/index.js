import React from "react";
import PropTypes from "prop-types";
import { Link as L } from "react-router-dom";
import pick from "lodash/pick";

import { AnimatedBorderedLinkWrapper } from "./Link.styles";

function Link(props) {
    const { href, children } = props;
    const linkProps = pick(props, ["children", "href", "to"]);
    const borderStyleProps = pick(props, [
        "borderColor",
        "borderWidth",
        "buttonWidth",
        "buttonHeight",
        "fontColors",
    ]);
    return (
        <AnimatedBorderedLinkWrapper {...borderStyleProps}>
            {href ? <a {...linkProps}>{children}</a> : <L {...linkProps} />}
        </AnimatedBorderedLinkWrapper>
    );
}

Link.propTypes = {
    /** If specified react router Link is user */
    to: PropTypes.string,
    /** If specified native html a link is used */
    href: PropTypes.string,
    /** HTML element content */
    children: PropTypes.node.isRequired,
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
};

Link.defaultProps = {
    to: null,
    href: null,
    borderColor: "black",
    borderWidth: 8,
    buttonWidth: 128,
    buttonHeight: 64,
    fontColors: {
        active: "white",
        hover: "#2386F1",
        initial: "black",
    },
};

export default Link;
