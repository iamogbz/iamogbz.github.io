import emmanuelRoutes from "./Emmanuel/routes";

const defaultRoute = {
    path: "profile",
    children: [...emmanuelRoutes],
};

export default [
    defaultRoute,
    // Support legacy links e.g. #/profile.emmanuel
    ...defaultRoute.children.map(route => ({
        ...route,
        path: `${defaultRoute.path}.${route.path}`,
    })),
];
