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

  const selectHero = useCallback(
    (shortName: string) => {
      const hero = heroes.find((x) => x.shortname === shortName);

      const firstAvailable = selectedHeroes.findIndex((x) => x === null);

      if (
        hero &&
        firstAvailable !== undefined &&
        !selectedHeroes.includes(hero)
      ) {
        const newSelectedHeroes = [...selectedHeroes];
        newSelectedHeroes[firstAvailable] = hero;
        setSelectedHeroes(newSelectedHeroes);
      }
    },
    [heroes, selectedHeroes]
  );

  const deselectHero = useCallback(
    (shortName: string) => {
      const index = selectedHeroes.findIndex((x) => x?.shortname === shortName);

      if (index >= 0) {
        const newSelectedHeroes = [...selectedHeroes];
        newSelectedHeroes[index] = null;
        setSelectedHeroes(newSelectedHeroes);
      }
    },
    [selectedHeroes]
  );

  const legendaryHeroes = heroes.filter((x) => x.rarity === Rarity.Legendary);
  const epicHeroes = heroes.filter((x) => x.rarity === Rarity.Epic);
  const rareHeroes = heroes.filter((x) => x.rarity === Rarity.Rare);
  const uncommonHeroes = heroes.filter((x) => x.rarity === Rarity.Uncommon);

  return (
    <div className="flex flex-col items-center gap-2 mt-4 mb-8">
      <div className="flex flex-row items-center gap-8">
        <HeroCard hero={selectedHeroes[0]} onClick={deselectHero} />
        <HeroCard hero={selectedHeroes[1]} onClick={deselectHero} />
      </div>
      <div className="flex flex-row items-center gap-8">
        <HeroCard hero={selectedHeroes[2]} onClick={deselectHero} />
        <HeroCard hero={selectedHeroes[3]} onClick={deselectHero} />
        <HeroCard hero={selectedHeroes[4]} onClick={deselectHero} />
      </div>
      {[legendaryHeroes, epicHeroes, rareHeroes, uncommonHeroes].map(
        (heroKind, index) => (
          <div
            key={index}
            className="flex flex-row items-center gap-2 mt-6 hero-row flex-wrap"
          >
            {heroKind.map((x) => (
              <HeroCard
                key={x.shortname}
                hero={x}
                onClick={selectHero}
                disabled={selectedHeroes.includes(x)}
              />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default HeroesLineup;
