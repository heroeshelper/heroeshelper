import { createBrowserRouter } from "react-router";
import Home from "./pages/home";
import NotFound from "./pages/error/NotFound";
import HeroesLineup from "./pages/heroes/line-up";
import Layout from "./Layout";
import HeroPage from "./pages/heroes/hero";
import HeroList from "./pages/heroes/list";
import AboutPage from "./pages/about";
import CookiePage from "./pages/cookies";
import ChangelogPage from "./pages/changelog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "heroes",
                children: [
                    {
                        path: "line-up/:saveString?",
                        element: <HeroesLineup />,
                    },
                    {
                        path: "list",
                        element: <HeroList />,
                    },
                ],
            },
            {
                path: "/hero/:id",
                element: <HeroPage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/cookies",
                element: <CookiePage />,
            },
            {
                path: "/changelog",
                element: <ChangelogPage />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

export default router;
