import React, { useEffect, useState } from "react";
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

function Frame({ url }) {
    const [visible, setVisible] = useState();
    const [htmlDoc, setHTML] = useState();
    useEffect(() => {
        setVisible(false);
        fetch(url)
            .then(r => r.text())
            .then(text => setHTML(replaceLinksInHTML(text, url)))
            .catch(() => setTimeout(() => setHTML(undefined), 400))
            .finally(() => setTimeout(() => setVisible(true), 800));
    }, [url]);
    // eslint-disable-next-line react/no-danger
    return <FrameContainer src={url} srcDoc={htmlDoc} visible={visible} />;
}

Frame.propTypes = {
    url: PropTypes.string.isRequired,
};

export default Frame;
