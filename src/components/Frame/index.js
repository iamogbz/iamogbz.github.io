import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FrameContainer } from "./Frame.styles";

const replaceLinksInHTML = htmlText =>
    htmlText.replace(/<a/g, `<a target="_blank" `);

const Frame = ({ url }) => {
    const [visible, setVisible] = useState();
    const [htmlDoc, setHTML] = useState();
    useEffect(
        () => {
            setVisible(false);
            fetch(url)
                .then(r => r.text())
                .then(text => setHTML(replaceLinksInHTML(text)))
                .catch(() => setTimeout(() => setHTML(undefined), 400))
                .finally(() => setTimeout(() => setVisible(true), 800));
        },
        [url],
    );
    // eslint-disable-next-line react/no-danger
    return <FrameContainer src={url} srcDoc={htmlDoc} visible={visible} />;
};

Frame.propTypes = {
    url: PropTypes.string.isRequired,
};

export default Frame;
