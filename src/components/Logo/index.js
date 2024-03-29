import React from "react";
import PropTypes from "prop-types";

import { Colors } from "utils/constants";
import { SVGWrapper } from "./Logo.styles";

export default function Logo({ size }) {
    const pathProps = {
        strokeLinecap: "round",
        strokeWidth: "32",
        fillRule: "nonzero",
        fill: "none",
    };
    return (
        <SVGWrapper>
            <div id="logo">
                <svg height={size} width={size} viewBox="-260 -260 720 720">
                    <path
                        className="ring left"
                        stroke={Colors.LIGHT}
                        {...pathProps}
                        d="M100,0 a100,100 0 0 1 0,200 a100,100 0 0 1 0,-200,0"
                    />
                    <path
                        className="ring right"
                        stroke={Colors.LIGHT}
                        {...pathProps}
                        d="M100,0 a100,100 0 0 1 0,200 a100,100 0 0 1 0,-200,0"
                    />
                </svg>
            </div>
        </SVGWrapper>
    );
}

Logo.propTypes = {
    size: PropTypes.number.isRequired,
};
