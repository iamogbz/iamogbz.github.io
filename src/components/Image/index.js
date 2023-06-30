import React from "react";
import PropTypes from "prop-types";

const imageAssetPath = "assets/images";

function Image({ name, size, type, className, style }) {
    return (
        <img
            src={`/${imageAssetPath}/${name}.${
                type || Image.defaultProps.type
            }`}
            alt={name}
            className={className}
            style={{ ...style, width: size }}
        />
    );
}

Image.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.shape({}),
    type: PropTypes.string,
};

Image.defaultProps = {
    className: null,
    size: "initial",
    style: {},
    type: "png",
};

export default Image;
