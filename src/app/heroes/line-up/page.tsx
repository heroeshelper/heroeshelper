"use client";
import { useHeroes } from "@/shared/heroes";

const HeroesLineup = () => {
  const heroes = useHeroes();
  return (
    <div>
      {heroes.map((x) => (
        <div key={x.shortname}>
          {x.name}: {x.rarity}
        </div>
      ))}
    </div>
  );
};

export default HeroesLineup;
