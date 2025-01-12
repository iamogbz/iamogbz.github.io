import React from "react";

import Logo from "components/Logo";
import Link from "components/Link";
import { Colors, Zindex } from "utils/constants";
import { FullPageGrid, CenteredCell } from "./Home.styles";

const headerCellStyle = {
    backgroundColor: `color-mix(in srgb, ${Colors.DARK} 60%, transparent)`,
};
const linkCellStyle = {
    zIndex: Zindex.TOP,
    backgroundColor: `color-mix(in srgb, ${Colors.DARK} 80%, transparent)`,
};

export default function Home() {
    const linkProps = {
        borderColor: Colors.LIGHT,
        borderWidth: "4px",
        buttonWidth: "256px",
        buttonHeight: "6vmax",
        fontSize: "2.4vmax",
        fontColors: {
            initial: Colors.LIGHT,
            active: Colors.ACTIVE,
        },
    };
    return (
        <FullPageGrid columns={3} rows={3} gap="0" key="page-grid">
            <CenteredCell width={3} height={2} style={headerCellStyle}>
                <Logo size={document.body.clientHeight * 0.4} />
            </CenteredCell>
            {[
                ["Source", "https://github.com/iamogbz/iamogbz.github.io"],
                ["Labs", "/labs"],
                ["Profile", "/profile/emmanuel"],
            ].map(([name, link]) => (
                <CenteredCell key={name} style={linkCellStyle}>
                    <Link {...linkProps} to={link}>
                        {name}
                    </Link>
                </CenteredCell>
            ))}
        </FullPageGrid>
    );
}
