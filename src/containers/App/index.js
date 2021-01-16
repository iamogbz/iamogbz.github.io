import React from "react";
import { HashRouter } from "react-router-dom";
import { Switch } from "react-router";

import routes from "./routes";
import { GlobalStyle } from "./App.style";

export default function App() {
    return (
        <>
            <HashRouter>
                <Switch>{routes.render()}</Switch>
            </HashRouter>
            ,
            <GlobalStyle dark />,
        </>
    );
}
