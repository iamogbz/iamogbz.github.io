import React from "react";
import PageLoading from "components/PageLoading";

export default function pageLoadable(loader) {
    const LazyComponent = React.lazy(loader);
    return function Loadable(props) {
        return (
            <React.Suspense fallback={<PageLoading />}>
                <LazyComponent {...props} />
            </React.Suspense>
        );
    };
}
