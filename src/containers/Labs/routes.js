import Chart from "react-router-chart";

import Labs from ".";

export default Chart.route({ name: "labs" })
    .rPath("labs")
    .rComponent(Labs)
    .rExact(true);
