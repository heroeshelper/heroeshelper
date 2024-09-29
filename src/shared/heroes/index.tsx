"use client";
import { createContext, useContext } from "react";
import { Hero } from "./types";
import HeroesProvider from "./HeroesProvider";

export const HeroesContext = createContext<Hero[]>([]);

const useHeroes = () => {
  return useContext(HeroesContext);
};

export { useHeroes, HeroesProvider };
