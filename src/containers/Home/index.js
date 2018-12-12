import React from "react";

import Logo from "components/Logo";
import Link from "components/Link";
import appRoutes from "containers/App/routes";
import { Colors, Zindex } from "utils/constants";
import { FullPageGrid, CenteredCell } from "./Home.styles";

export default function() {
    const routed = appRoutes.describe();
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
        <FullPageGrid columns={3} rows={3} gap={0} key="page-grid">
            <CenteredCell width={3} height={2}>
                <Logo size="40vh" />
            </CenteredCell>
            {[
                ["Source", "https://github.com/iamogbz/iamogbz.github.io"],
                ["Labs", routed.labs.$],
                ["Profile", routed.profiles.emmanuel.$],
            ].map(([name, link]) => (
                <CenteredCell
                    key={name}
                    style={{
                        zIndex: Zindex.TOP,
                        backgroundColor: "rgba(0,0,0,0.8)",
                    }}
                >
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
