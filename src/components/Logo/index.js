import React from "react";

import { Colors } from "utils/constants";
import { SVGWrapper } from "./Logo.styles";

const random = (min = 0, max = 1) => min + Math.random() * (max - min);

export default function Logo(props) {
    const pathProps = {
        strokeLinecap: "round",
        strokeWidth: "1",
        fillRule: "nonzero",
        fill: "none",
    };
    const randomAnimProps = () => ({
        animationDelay: `${random(0, 2)}s`,
        animationDuration: `${random(2, 4)}s, ${random(1, 4)}s`,
    });
    return (
        <SVGWrapper {...props}>
            <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                    d="M12,4 L12,24"
                    transform="translate(12.000000, 14.000000) rotate(90.000000) translate(-12.000000, -14.000000) "
                    id="line2"
                    className="animline"
                    stroke={Colors.LIGHT}
                    {...pathProps}
                    style={randomAnimProps()}
                />
                <path
                    d="M12,5 C8.13400675,5 5,8.13400675 5,12 C5,15.8659932 8.13400675,19 12,19 C15.8659932,19 19,15.8659932 19,12 C19,8.13622462 15.8695881,5.00359612 12.0066529,5.00000309"
                    id="circle"
                    className="animline"
                    stroke={Colors.ACTIVE}
                    {...pathProps}
                    style={randomAnimProps()}
                />
                <path
                    d="M14,2 L14,22"
                    id="line1"
                    className="animline"
                    stroke={Colors.LIGHT}
                    {...pathProps}
                    style={randomAnimProps()}
                />
            </svg>
        </SVGWrapper>
    );
}
