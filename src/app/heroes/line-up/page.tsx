"use client";
import { useHeroes } from "@/shared/heroes";
import Metadata from "@/shared/Metadata";

export const HeroesLineup = () => {
  const heroes = useHeroes();
  return (
    <>
      <Metadata title="blkalba" description="dfdfdfdf" />
      <div>
        {heroes.map((x) => (
          <div key={x.shortname}>{x.name}</div>
        ))}
      </div>
    </>
  );
};

export default HeroesLineup;
