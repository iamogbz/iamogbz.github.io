import React from "react";
import { HashRouter } from "react-router-dom";
import { Switch } from "react-router";

import routes from "./routes";

export default function App() {
    return (
        <HashRouter>
            <Switch>{routes.render()}</Switch>
        </HashRouter>
    );
}
