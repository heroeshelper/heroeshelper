"use client";
import { useHeroes } from "@/shared/heroes";
import HeroCard from "@/shared/heroes/HeroCard";

const HeroesLineup = () => {
  const heroes = useHeroes();
  return (
    <div>
      {heroes.map((x) => (
        <HeroCard key={x.shortname} hero={x} />
      ))}
    </div>
  );
};

export default HeroesLineup;
