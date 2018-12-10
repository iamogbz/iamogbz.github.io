import React from "react";

import GameOfLife from "components/GameOfLife";
import Link from "components/Link";
import appRoutes from "containers/App/routes";
import { FullPageGrid, CenteredCell } from "./Home.styles";

export default function() {
    const routed = appRoutes.describe();
    const linkProps = {
        backgroundColor: "rgba(0,0,0,0.5)",
        borderColor: "white",
        borderWidth: 4,
        buttonWidth: 256,
        buttonHeight: 96,
        fontSize: 32,
        fontColors: {
            initial: "white",
        },
        style: { zIndex: 999 },
    };
    return [
        <GameOfLife key="game-of-life" fixed />,
        <FullPageGrid columns={3} rows={3} key="page-grid">
            <CenteredCell width={3} height={2} />
            {[
                ["Source", "https://github.com/iamogbz/iamogbz.github.io"],
                ["Labs", routed.labs.$],
                ["Profile", routed.profiles.emmanuel.$],
            ].map(([name, link]) => (
                <CenteredCell key={name}>
                    <Link
                        {...linkProps}
                        {...(link.startsWith("http")
                            ? { href: link }
                            : { to: link })}
                    >
                        {name}
                    </Link>
                </CenteredCell>
            ))}
        </FullPageGrid>,
    ];
}
