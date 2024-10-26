import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home/page";
import NotFound from "./pages/error/NotFound";
import HeroesLineup from "./pages/heroes/line-up/page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/heroes/line-up",
        element: <HeroesLineup />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
