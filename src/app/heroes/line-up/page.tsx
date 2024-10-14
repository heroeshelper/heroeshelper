"use client";
import { useHeroes } from "@shared/heroes";
import HeroCard from "@shared/heroes/HeroCard";
import { Rarity } from "@shared/heroes/types";

const HeroesLineup = () => {
  const heroes = useHeroes();

  const legendaryHeroes = heroes.filter((x) => x.rarity === Rarity.Legendary);
  const epicHeroes = heroes.filter((x) => x.rarity === Rarity.Epic);
  const rareHeroes = heroes.filter((x) => x.rarity === Rarity.Rare);
  const uncommonHeroes = heroes.filter((x) => x.rarity === Rarity.Uncommon);

  return (
    <div className="flex flex-col items-center gap-2 mt-4 mb-8">
      <div className="flex flex-row items-center gap-8">
        <HeroCard />
        <HeroCard />
      </div>
      <div className="flex flex-row items-center gap-8">
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </div>
      <div className="flex flex-row items-center gap-2 mt-4 hero-row flex-wrap">
        {legendaryHeroes.map((x) => (
          <HeroCard key={x.shortname} hero={x} />
        ))}
      </div>
      <div className="flex flex-row items-center gap-2 mt-4 hero-row flex-wrap">
        {epicHeroes.map((x) => (
          <HeroCard key={x.shortname} hero={x} />
        ))}
      </div>
      <div className="flex flex-row items-center gap-2 mt-4 hero-row flex-wrap">
        {rareHeroes.map((x) => (
          <HeroCard key={x.shortname} hero={x} />
        ))}
      </div>
      <div className="flex flex-row items-center gap-2 mt-4 hero-row flex-wrap">
        {uncommonHeroes.map((x) => (
          <HeroCard key={x.shortname} hero={x} />
        ))}
      </div>
    </div>
  );
};

export default HeroesLineup;
