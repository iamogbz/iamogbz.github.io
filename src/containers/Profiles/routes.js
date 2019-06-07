import { Chart } from "react-router-chart";

import emmanuelRoutes from "./Emmanuel/routes";

export default Chart.route({ name: "profiles" })
    .rPath("profile")
    .addNestedRoutes(emmanuelRoutes);
