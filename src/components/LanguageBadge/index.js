import React from "react";
import PropTypes from "prop-types";
import { OpenInNew } from "styled-icons/material";
import { Colors } from "utils/constants";
import { BadgeWrapper, Spacer } from "./LanguageBadge.styles";

const badgeValue = (n, m) => Math.ceil((n * 100) / m);

function LanguageBadge({ name, numerator, denominator, colors, url }) {
    const value = badgeValue(numerator, denominator);
    const spacer = <Spacer color={colors.$.foreground} />;
    const hasValUrl = url && value;
    const wrapperProps = { colors, href: hasValUrl ? url : undefined };
    return (
        <BadgeWrapper {...wrapperProps}>
            {name}
            {hasValUrl ? spacer : null}
            {hasValUrl ? (
                <OpenInNew color={colors.$.foreground} size="1.2vmax" />
            ) : null}
        </BadgeWrapper>
    );
}

const colorShape = PropTypes.shape({
    background: PropTypes.string,
    foreground: PropTypes.string,
});

LanguageBadge.propTypes = {
    name: PropTypes.string.isRequired,
    numerator: PropTypes.number.isRequired,
    denominator: PropTypes.number.isRequired,
    url: PropTypes.string,
    colors: PropTypes.shape({ $: colorShape, hover: colorShape }),
};

LanguageBadge.defaultProps = {
    url: null,
    colors: {
        $: {
            background: Colors.DARK,
            foreground: Colors.LIGHT,
        },
        hover: {
            background: "black",
            foreground: Colors.ACTIVE,
        },
    },
};

export default LanguageBadge;
