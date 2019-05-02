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

const Frame = ({ url }) => {
    const [__html, setHTML] = useState();
    const [visible, setVisible] = useState();
    useEffect(
        () => {
            setVisible(false);
            fetch(url)
                .then(r => r.text())
                .then(text => {
                    const html = replaceLinksInHTML(text, url);
                    setTimeout(() => setHTML(html), 400);
                    setTimeout(() => setVisible(true), 800);
                })
                // eslint-disable-next-line no-console
                .catch(console.error);
        },
        [url],
    );
    // eslint-disable-next-line react/no-danger
    return (
        <FrameContainer
            dangerouslySetInnerHTML={{ __html }}
            visible={visible}
        />
    );
};

Frame.propTypes = {
    url: PropTypes.string.isRequired,
};

export default Frame;
