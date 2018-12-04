import Chart from "react-router-chart";

import Profile from ".";

export default Chart.route({ name: "emmanuel" })
    .rPath(".emmanuel")
    .rComponent(Profile)
    .rExact(true);
