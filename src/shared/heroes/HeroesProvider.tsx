import { ReactNode } from "react";
import unitData from "./data/heroes.json";
import { HeroesContext } from ".";
import { Hero } from "./types";

type Props = {
    children: ReactNode;
};

const HeroesProvider = ({ children }: Props) => {
    const heroes = unitData as Hero[];

    return <HeroesContext.Provider value={heroes}>{children}</HeroesContext.Provider>;
};

export default HeroesProvider;
