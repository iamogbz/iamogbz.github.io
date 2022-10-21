import React from "react";

import Labs from "./Loadable";

export default [
    {
        path: "labs",
        element: <Labs />,
        exact: true,
        children: [
            {
                path: ":experiment",
                exact: true,
            },
        ],
    },
];
