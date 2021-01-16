import React from "react";
import PageLoading from "components/PageLoading";

export default function pageLoadable(loader) {
    const Loadable = React.lazy(loader);
    return () => (
        <React.Suspense fallback={<PageLoading />}>
            <Loadable />
        </React.Suspense>
    );
}
