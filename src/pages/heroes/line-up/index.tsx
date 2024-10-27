import { useHeroes } from "@heroesplanner/shared/heroes";
import HeroCard from "@heroesplanner/shared/heroes/HeroCard";
import { Hero, Rarity } from "@heroesplanner/shared/heroes/types";
import { isNil, isNotNil } from "@heroesplanner/utils/isNil";
import { useCallback, useEffect, useState } from "react";
import { generatePath, useParams } from "react-router-dom";

const SAVE_SEPARATOR = "|";

const getDefaultSaveState = (saveString: string | undefined, heroes: Hero[]) => {
    const emptyResult = Array(5).fill(null);

    if (isNil(saveString)) return emptyResult;

    let decodedSaveString;
    try {
        decodedSaveString = atob(saveString);
    } catch {
        return emptyResult;
    }

    const saveParts = decodedSaveString.split(SAVE_SEPARATOR);

    if (saveParts.filter(x => x != "").length > new Set(saveParts).size) return emptyResult;
    const result = saveParts.map(x => heroes.find(h => h.id.toString() === x) ?? null);

    return result.concat(Array(emptyResult.length - result.length).fill(null));
};

const getSaveString = (heroes: (Hero | null)[]) => {
    const lastHeroIndex = heroes.findLastIndex(x => isNotNil(x));
    if (lastHeroIndex === -1) return "";
    const s = heroes.slice(0, lastHeroIndex + 1);

    return btoa(s.map(x => (isNil(x) ? "" : x.id)).join(SAVE_SEPARATOR)).replaceAll("=", "");
};

const HeroesLineup = () => {
    const heroes = useHeroes();

    const { saveString } = useParams();

    const [selectedHeroes, setSelectedHeroes] = useState<(Hero | null)[]>(() =>
        getDefaultSaveState(saveString, heroes),
    );

    useEffect(() => {
        const saveString = getSaveString(selectedHeroes);

        const newPath = generatePath("/heroes/line-up/:saveString", { saveString });

        history.replaceState("Save state update", "", newPath);
    }, [selectedHeroes]);

    const selectHero = useCallback(
        (shortName: string) => {
            const hero = heroes.find(x => x.shortname === shortName);

            const firstAvailable = selectedHeroes.findIndex(x => x === null);

            if (hero && firstAvailable !== undefined && !selectedHeroes.includes(hero)) {
                const newSelectedHeroes = [...selectedHeroes];
                newSelectedHeroes[firstAvailable] = hero;
                setSelectedHeroes(newSelectedHeroes);
            }
        },
        [heroes, selectedHeroes],
    );

    const deselectHero = useCallback(
        (shortName: string) => {
            const index = selectedHeroes.findIndex(x => x?.shortname === shortName);

            if (index >= 0) {
                const newSelectedHeroes = [...selectedHeroes];
                newSelectedHeroes[index] = null;
                setSelectedHeroes(newSelectedHeroes);
            }
        },
        [selectedHeroes],
    );

    const legendaryHeroes = heroes.filter(x => x.rarity === Rarity.Legendary);
    const epicHeroes = heroes.filter(x => x.rarity === Rarity.Epic);
    const rareHeroes = heroes.filter(x => x.rarity === Rarity.Rare);
    const uncommonHeroes = heroes.filter(x => x.rarity === Rarity.Uncommon);

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
            {[legendaryHeroes, epicHeroes, rareHeroes, uncommonHeroes].map((heroKind, index) => (
                <div key={index} className="flex flex-row items-center gap-2 mt-6 hero-row flex-wrap">
                    {heroKind.map(x => (
                        <HeroCard
                            key={x.shortname}
                            hero={x}
                            onClick={selectHero}
                            disabled={selectedHeroes.includes(x)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default HeroesLineup;
