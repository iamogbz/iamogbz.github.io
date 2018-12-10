import React from "react";
import PropTypes from "prop-types";

const imageAssetPath = "assets/images";

const Image = ({ name, size, type, className }) => (
    <img
        className={className}
        src={`/${imageAssetPath}/${name}.${type || Image.defaultProps.type}`}
        alt={name}
        width={size}
    />
);

Image.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string,
};

Image.defaultProps = {
    className: null,
    size: "initial",
    type: "png",
};

export default Image;
