import React from "react";
import PropTypes from "prop-types";
import { FrameContainer } from "./Frame.styles";

const Frame = ({ url }) => (
    <FrameContainer src={url} frame-ancestors="ogbizi.com github.com" />
);

Frame.propTypes = {
    url: PropTypes.string.isRequired,
};

export default Frame;
