import { RouterProvider } from "react-router-dom";
import { HeroesProvider } from "./shared/heroes";
import router from "./router";

const App = () => {
    return (
        <HeroesProvider>
            <RouterProvider router={router} />
        </HeroesProvider>
    );
};

export default App;
