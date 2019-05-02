import React, { useState } from "react";
import PropTypes from "prop-types";
import { FrameContainer } from "./Frame.styles";

const replaceLinksInText = (text, base) =>
    text
        .replace(/href="(?!([/]|(http)))/, `href="${base}/`)
        .replace(/src="(?!([/]|(http)))/, `src="${base}/`)
        .replace("<a", `<a target="_blank" `);

const Frame = ({ url }) => {
    const [__html, setHTML] = useState();
    fetch(url)
        .then(r => r.text())
        .then(text => setHTML(replaceLinksInText(text)));
    // eslint-disable-next-line react/no-danger
    return <FrameContainer dangerouslySetInnerHTML={{ __html }} />;
};

Frame.propTypes = {
    url: PropTypes.string.isRequired,
};

export default Frame;
