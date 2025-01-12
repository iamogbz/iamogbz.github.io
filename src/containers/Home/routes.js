import React from "react";

import Home from "./Loadable";

export default [
    {
        path: "/",
        element: <Home />,
        exact: true,
    },
    {
        path: "labs",
        element: <Home />,
        exact: true,
        children: [
            {
                path: ":projectName",
                exact: true,
            },
        ],
    },
];
