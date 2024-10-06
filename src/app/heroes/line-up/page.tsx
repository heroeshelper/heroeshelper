"use client";
import { useHeroes } from "@shared/heroes";
import HeroCard from "@shared/heroes/HeroCard";

const HeroesLineup = () => {
  const heroes = useHeroes();
  return (
    <div className="flex flex-col items-center gap-2 mt-4">
      <div className="flex flex-row items-center gap-2">
        <HeroCard />
        <HeroCard />
      </div>
      <div className="flex flex-row items-center gap-2">
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </div>
      <div className="flex flex-row items-center gap-2 mt-4">
        {heroes.map((x) => (
          <HeroCard key={x.shortname} hero={x} />
        ))}
      </div>
    </div>
  );
};

export default HeroesLineup;
