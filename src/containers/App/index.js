import React from "react";
import { createHashRouter } from "react-router-dom";
import { RouterProvider } from "react-router";

import routes from "./routes";
import { GlobalStyle } from "./App.style";

const router = createHashRouter(routes);

export default function App() {
    return (
        <>
            <RouterProvider router={router} />
            <GlobalStyle dark />
        </>
    );
}
