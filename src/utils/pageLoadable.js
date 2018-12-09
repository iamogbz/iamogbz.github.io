import Loadable from "react-loadable";

import PageLoading from "components/PageLoading";

export default function pageLoadable(loader) {
    return Loadable({
        loader,
        loading: PageLoading,
    });
}
