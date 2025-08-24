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
    const linkPropStyles = {
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
            rows={5}
            style={{ gap: "3vw", paddingBottom: "5vmax", justifyContents: "center" }}
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
                    "🐱 Chrome Alt Tabs: shortcuts to speed up brower tab handling",
                    "https://chromewebstore.google.com/detail/alt-tab-shortcuts/ebdcpdepkbefmgfdkdplcmhfkddagfon",
                ],
                [
                    "📝 Story.AI: assists with writing stories from novel ideas",
                    "https://qbrkts.com/story.ai",
                ],
                [
                    "🎮 Disnumber: A game where you dismember the digits to find the solution",
                    "https://ogbizi.com/disnumber",
                ],
                [
                    "♟️ Chaos Chess: A game of simultaneous moves and strategic gambits",
                    "https://chaos-chess.ogbizi.com",
                ],
                [
                    "📚 Scrabblex: Combining the best parts of Scrabble and Crossword",
                    "https://scrabblex.ogbizi.com",
                ],
                [
                    "🧿 MacOS quicklook plugin to support previewing adobe xd files",
                    "https://ogbizi.com/macos-quick-look-plugin-adobe-xd/",
                ],
                [
                    "📟 Animaterm: automatically prescript terminal animations",
                    "https://ogbizi.com/animaterm",
                ],
                [
                    "🐒 Export Element: userscript for screenshotting html nodes",
                    "https://ogbizi.com/oh-my-scripts/release?script=export-element",
                ],
                [
                    "🖲️ Fancy Cursor: userscript for highlighting html nodes",
                    "https://ogbizi.com/oh-my-scripts/release?script=fancy-cursor",
                ],
            ].map(([name, link]) => (
                <CenteredCell key={name} style={linkCellStyle}>
                    <Link _styles={linkPropStyles} to={link}>
                        {name}
                    </Link>
                </CenteredCell>
            ))}
        </FullPageGrid>
    );
}
