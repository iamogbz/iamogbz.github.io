import React from "react";

import Image from "components/Image";
import Link from "components/Link";
import appRoutes from "containers/App/routes";
import { FullPageGrid, CenteredCell } from "./Home.styles";

export default function() {
    const routed = appRoutes.describe();
    return (
        <FullPageGrid columns={3} rows={3}>
            <CenteredCell width={3} height={2}>
                <Image size="256" name="favicon" />
            </CenteredCell>
            <CenteredCell>
                <Link href="https://github.com/iamogbz.github.io">Source</Link>
            </CenteredCell>
            <CenteredCell>
                <Link to={routed.labs.$}>Labs</Link>
            </CenteredCell>
            <CenteredCell>
                <Link to={routed.profiles.emmanuel.$}>Profile</Link>
            </CenteredCell>
        </FullPageGrid>
    );
}
