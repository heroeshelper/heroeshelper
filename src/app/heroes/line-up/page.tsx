"use client";
import { useHeroes } from "@shared/heroes";
import HeroCard from "@shared/heroes/HeroCard";
import { Hero, Rarity } from "@shared/heroes/types";
import { useCallback, useState } from "react";

const HeroesLineup = () => {
  const heroes = useHeroes();

  const [selectedHeroes, setSelectedHeroes] = useState<(Hero | null)[]>(
    Array(5).fill(null)
  );

  const availableHeroes = heroes.filter((x) => !selectedHeroes.includes(x));

  const onHeroClick = useCallback(
    (shortName: string) => {
      const hero = heroes.find((x) => x.shortname === shortName);

      const firstAvailable = selectedHeroes.findIndex((x) => x === null);

      if (hero && firstAvailable != undefined) {
        const newSelectedHeroes = [...selectedHeroes];
        newSelectedHeroes[firstAvailable] = hero;
        setSelectedHeroes(newSelectedHeroes);
      }
    },
    [heroes, selectedHeroes]
  );

  const legendaryHeroes = availableHeroes.filter(
    (x) => x.rarity === Rarity.Legendary
  );
  const epicHeroes = availableHeroes.filter((x) => x.rarity === Rarity.Epic);
  const rareHeroes = availableHeroes.filter((x) => x.rarity === Rarity.Rare);
  const uncommonHeroes = availableHeroes.filter(
    (x) => x.rarity === Rarity.Uncommon
  );

  return (
    <div className="flex flex-col items-center gap-2 mt-4 mb-8">
      <div className="flex flex-row items-center gap-8">
        <HeroCard hero={selectedHeroes[0]} />
        <HeroCard hero={selectedHeroes[1]} />
      </div>
      <div className="flex flex-row items-center gap-8">
        <HeroCard hero={selectedHeroes[2]} />
        <HeroCard hero={selectedHeroes[3]} />
        <HeroCard hero={selectedHeroes[4]} />
      </div>
      <div className="flex flex-row items-center gap-2 mt-6 hero-row flex-wrap">
        {legendaryHeroes.map((x) => (
          <HeroCard key={x.shortname} hero={x} onClick={onHeroClick} />
        ))}
      </div>
      <div className="flex flex-row items-center gap-2 mt-4 hero-row flex-wrap">
        {epicHeroes.map((x) => (
          <HeroCard key={x.shortname} hero={x} onClick={onHeroClick} />
        ))}
      </div>
      <div className="flex flex-row items-center gap-2 mt-4 hero-row flex-wrap">
        {rareHeroes.map((x) => (
          <HeroCard key={x.shortname} hero={x} onClick={onHeroClick} />
        ))}
      </div>
      <div className="flex flex-row items-center gap-2 mt-4 hero-row flex-wrap">
        {uncommonHeroes.map((x) => (
          <HeroCard key={x.shortname} hero={x} onClick={onHeroClick} />
        ))}
      </div>
    </div>
  );
};

export default HeroesLineup;
