import { RouterProvider } from "react-router-dom";
import { HeroesProvider } from "./shared/heroes";
import router from "./router";
import { HelmetProvider } from "react-helmet-async";

const helmetContext = {};

const App = () => {
    return (
        <HelmetProvider context={helmetContext}>
            <HeroesProvider>
                <RouterProvider router={router} />
            </HeroesProvider>
        </HelmetProvider>
    );
};

export default App;
