import homeRoute from "../Home/routes";
import labRoutes from "../Labs/routes";
import profileRoutes from "../Profiles/routes";

const route = homeRoute.addNestedRoutes(labRoutes, profileRoutes);

export default route;
