import React from "react";
import PropTypes from "prop-types";
import { Link as L } from "react-router-dom";

import { AnimatedBorderedLinkWrapper } from "./Link.styles";

function Link(props) {
    const { href, children } = props;
    return (
        <AnimatedBorderedLinkWrapper>
            {href ? <a {...props}>{children}</a> : <L {...props} />}
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
};

Link.defaultProps = {
    to: null,
    href: null,
};

export default Link;
