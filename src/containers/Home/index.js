import React from "react";

import Image from "components/Image";
import Link from "components/Link";
import appRoutes from "containers/App/routes";
import { FullPageGrid, CenteredCell } from "./Home.styles";

export default function() {
    const routed = appRoutes.describe();
    const linkProps = {
        buttonWidth: 256,
        buttonHeight: 80,
        fontSize: 32,
    };
    return (
        <FullPageGrid columns={3} rows={3}>
            <CenteredCell
                width={3}
                height={2}
                style={{ backgroundColor: "black" }}
            >
                <Image size="256" name="favicon" />
            </CenteredCell>
            <CenteredCell>
                <Link
                    {...linkProps}
                    href="https://github.com/iamogbz/iamogbz.github.io"
                >
                    Source
                </Link>
            </CenteredCell>
            <CenteredCell>
                <Link {...linkProps} to={routed.labs.$}>
                    Labs
                </Link>
            </CenteredCell>
            <CenteredCell>
                <Link {...linkProps} href="http://emmanuel.ogbizi.com">
                    Profile
                </Link>
            </CenteredCell>
        </FullPageGrid>
    );
}
