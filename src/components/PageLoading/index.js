import React from "react";
import PropTypes from "prop-types";

import messages from "./PageLoading.messages";

const PageLoading = ({ error, pastDelay }) => {
    if (error) {
        console.error(error); // eslint-disable-line
        return <p>{messages.errorMessage}</p>;
    }
    if (pastDelay) {
        return <p>{messages.loadingMessage}</p>;
    }
    return null;
};

PageLoading.propTypes = {
    error: PropTypes.oneOfType([Boolean, Error]),
    pastDelay: PropTypes.bool,
};

PageLoading.defaultProps = {
    error: false,
    pastDelay: false,
};

export default PageLoading;
