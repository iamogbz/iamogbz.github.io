import Chart from "react-router-chart";

import Labs from "./Loadable";

export default Chart.route({ name: "labs" })
    .rPath("labs")
    .rComponent(Labs)
    .rExact(true)
    .addNestedRoutes(
        Chart.route({ name: "experiment" })
            .rPath("/:experiment")
            .rComponent(Labs)
            .rExact(true),
    );
