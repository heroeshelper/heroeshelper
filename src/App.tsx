import { RouterProvider } from "react-router";
import { HeroesProvider } from "./shared/heroes";
import router from "./router";
import { HelmetProvider } from "react-helmet-async";
import { NextUIProvider } from "@nextui-org/react";

const helmetContext = {};

const App = () => {
    return (
        <HelmetProvider context={helmetContext}>
            <NextUIProvider className="flex flex-col min-h-screen">
                <HeroesProvider>
                    <RouterProvider router={router} />
                </HeroesProvider>
            </NextUIProvider>
        </HelmetProvider>
    );
};

export default App;
