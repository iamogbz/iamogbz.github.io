import React from "react";

import Image from "components/Image";
import Link from "components/Link";
import appRoutes from "containers/App/routes";
import { FullPageGrid, CenteredCell } from "./Home.styles";

export default function() {
    const routed = appRoutes.describe();
    const linkProps = {
        borderColor: "white",
        borderWidth: "4px",
        buttonWidth: "256px",
        buttonHeight: "6vmax",
        fontSize: "2.4vmax",
        fontColors: {
            initial: "white",
            active: "#2386F1",
        },
    };
    return (
        <FullPageGrid columns={3} rows={3} gap={0} key="page-grid">
            <CenteredCell width={3} height={2}>
                <Image name="favicon" size="40vh" />
            </CenteredCell>
            {[
                ["Source", "https://github.com/iamogbz/iamogbz.github.io"],
                ["Labs", routed.labs.$],
                ["Profile", routed.profiles.emmanuel.$],
            ].map(([name, link]) => (
                <CenteredCell
                    key={name}
                    style={{
                        zIndex: 999,
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
