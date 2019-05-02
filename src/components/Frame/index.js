import React, { useState } from "react";
import PropTypes from "prop-types";
import { FrameContainer } from "./Frame.styles";

const replaceLinksInHTML = (htmlText, url) => {
    const host = new URL(url).origin;
    return htmlText
        .replace(/href="\//g, `href="${host}/`)
        .replace(/src="\//g, `href="${host}/`)
        .replace(/href="(?!([/]|(http)))/g, `href="${url}/`)
        .replace(/src="(?!([/]|(http)))/g, `src="${url}/`)
        .replace(/<a/g, `<a target="_blank" `);
};

const Frame = ({ url }) => {
    const [__html, setHTML] = useState();
    fetch(url)
        .then(r => r.text())
        .then(text => setHTML(replaceLinksInHTML(text, url)));
    // eslint-disable-next-line react/no-danger
    return <FrameContainer dangerouslySetInnerHTML={{ __html }} />;
};

Frame.propTypes = {
    url: PropTypes.string.isRequired,
};

export default Frame;
