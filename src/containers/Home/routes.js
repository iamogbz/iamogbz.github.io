import Chart from "react-router-chart";

import Home from "./Loadable";

export default Chart.route({ name: "home" })
    .rPath("/")
    .rComponent(Home)
    .rExact(true);
