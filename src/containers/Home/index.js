import React from "react";

import Image from "../../components/Image";
import { FullPageGrid, CenteredCell } from "./Home.styles";

export default function() {
    return (
        <FullPageGrid columns={3} rows={3}>
            <CenteredCell width={3} height={2}>
                <Image size="256" name="favicon" />
            </CenteredCell>
            <CenteredCell>Link 1</CenteredCell>
            <CenteredCell>Link 2</CenteredCell>
            <CenteredCell>Link 3</CenteredCell>
        </FullPageGrid>
    );
}
