"use client";
import { ReactNode } from "react";
import { HeroesProvider } from "../shared/heroes";

type Props = {
  children: ReactNode;
};

export const Providers = ({ children }: Props) => {
  return <HeroesProvider>{children}</HeroesProvider>;
};
