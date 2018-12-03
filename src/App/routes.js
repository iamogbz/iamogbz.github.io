import homeRoute from "../Home/routes";
import labRoutes from "../Labs/routes";

const route = homeRoute.addNestedRoutes(labRoutes);

export default route;
