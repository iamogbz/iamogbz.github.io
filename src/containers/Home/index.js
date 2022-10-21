import React from "react";

import Logo from "components/Logo";
import Link from "components/Link";
import { Colors, Zindex } from "utils/constants";
import { FullPageGrid, CenteredCell } from "./Home.styles";

const headerCellStyle = { backgroundColor: "rgba(0,0,0,0.6)" };
const linkCellStyle = {
    zIndex: Zindex.TOP,
    backgroundColor: "rgba(0,0,0,0.8)",
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
                <Logo size="40vh" />
            </CenteredCell>
            {[
                ["Source", "https://github.com/iamogbz/iamogbz.github.io"],
                ["Labs", "labs"],
                ["Profile", "profile/emmanuel"],
            ].map(([name, link]) => (
                <CenteredCell key={name} style={linkCellStyle}>
                    <Link
                        {...linkProps}
                        {...(link.startsWith("http")
                            ? { href: link, target: "_blank" }
                            : { to: link })}
                    >
                        {name}
                    </Link>
                </CenteredCell>
            ))}
        </FullPageGrid>
    );
}
