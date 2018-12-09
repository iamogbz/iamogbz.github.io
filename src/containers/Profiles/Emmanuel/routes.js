import Chart from "react-router-chart";

import Profile from "./Loadable";

export default Chart.route({ name: "emmanuel" })
    .rPath(".emmanuel")
    .rComponent(Profile)
    .rExact(true);
