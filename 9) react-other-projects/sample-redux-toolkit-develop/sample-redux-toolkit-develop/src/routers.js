import { Redirect } from "react-router-dom";
import Molecules from "./components/Molecules";
import Order from "./components/Order";
import SaladById from "./components/SaladById";
import Salads from "./components/Salads";
import { withSuspense } from "./hoc/withSuspense";

export const routers = {
    order: {
        path: "/order",
        render: withSuspense(Order),
        exact: true,
    },
    salads: {
        path: "/salads",
        render: withSuspense(Salads),
        exact: true,
    },
    saladsById: {
        path: "/salads/:id",
        render: withSuspense(SaladById),
    },
    molecules: {
        path: "/molecules",
        render: withSuspense(Molecules),
        exact: true,
    },
    redirectToStart: {
        path: "*",
        render: () => <Redirect to="/order" />,
    },
};

export const routersKeys = Object.keys(routers);
