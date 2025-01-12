import React from "react";

import Logo from "components/Logo";
import Link from "components/Link";
import { Colors, Zindex } from "utils/constants";
import { FullPageGrid, CenteredCell } from "./Home.styles";

const headerCellStyle = {
    backgroundColor: `color-mix(in srgb, ${Colors.DARK} 0%, transparent)`,
};
const linkCellStyle = {
    zIndex: Zindex.TOP,
    backgroundColor: `color-mix(in srgb, ${Colors.DARK} 0%, transparent)`,
};

export default function Home() {
    const linkProps = {
        borderColor: Colors.LIGHT,
        borderWidth: "4px",
        buttonWidth: "26vw",
        buttonHeight: "10vmax",
        fontSize: "1.0vmax",
        fontColors: {
            initial: Colors.LIGHT,
            active: Colors.ACTIVE,
        },
    };
    return (
        <FullPageGrid
            columns={3}
            rows={3}
            gap="3vw"
            style={{ paddingBottom: "5vmax", justifyContents: "center" }}
            key="page-grid"
        >
            <CenteredCell width={3} height={1} style={headerCellStyle}>
                <Logo size={document.body.clientHeight * 0.2} />
            </CenteredCell>
            {[
                [
                    "🧮 Source code of this website",
                    "https://github.com/iamogbz?tab=repositories&q=iamogbz.github.io",
                ],
                ["👨🏾‍💻 The developer's profile page", "/profile/emmanuel"],
                [
                    "📝 Another medium blog for tutorials and stuff",
                    "https://medium.com/@iamogbz",
                ],
                [
                    "📮 Letters, poems and musings written from the abyss",
                    "https://letters-from-the-abyss.com/",
                ],
                [
                    "🎮 Disnumber: game where you dismember the digits to find the solution",
                    "https://ogbizi.com/disnumber",
                ],
                [
                    "🐱 Chrome Alt Tabs: shortcuts to speed up brower tab handling",
                    "https://chromewebstore.google.com/detail/alt-tab-shortcuts/ebdcpdepkbefmgfdkdplcmhfkddagfon",
                ],
                [
                    "🧿 MacOS quicklook plugin to support previewing adobe xd files",
                    "https://ogbizi.com/macos-quick-look-plugin-adobe-xd/",
                ],
                [
                    "🐒 Export Element: userscript for screenshotting html nodes",
                    "https://ogbizi.com/oh-my-scripts/release",
                ],
                [
                    "📟 Animaterm: automatically prescript terminal animations",
                    "https://ogbizi.com/animaterm",
                ],
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
