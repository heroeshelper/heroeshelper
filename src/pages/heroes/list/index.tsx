import AssetImage from "@heroeshelper/shared/components/AssetImage";
import { SITE_TITLE } from "@heroeshelper/shared/constants";
import { useHeroes } from "@heroeshelper/shared/heroes";
import HeroCard from "@heroeshelper/shared/heroes/HeroCard";
import { Rarity } from "@heroeshelper/shared/heroes/types";
import { getStarCount } from "@heroeshelper/shared/heroes/utils";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const HeroList = () => {
    const heroes = useHeroes();

    return (
        <>
            <Helmet>
                <title>{`Hero list | ${SITE_TITLE}`}</title>
                <meta
                    name="description"
                    content="Wondering which heroes are available in Heroes of History? View them all here!"
                />
            </Helmet>
            <div className="flex p-8 pb-20 sm:p-20 flex-grow justify-center">
                <div className="hero-row">
                    <table className="border-spacing-4">
                        {[Rarity.Legendary, Rarity.Epic, Rarity.Rare, Rarity.Uncommon].map(r => {
                            const currentRarity = heroes.filter(x => x.rarity === r);
                            return (
                                <>
                                    <thead>
                                        <tr>
                                            <th colSpan={2} className="pt-8">
                                                <div className="stars flex gap-1 h-8">
                                                    {[...Array(getStarCount(r))].map((_, i) => (
                                                        <AssetImage
                                                            src={`/icons/heroes/hero_star.png`}
                                                            key={i}
                                                            className="w-6 h-6"
                                                        />
                                                    ))}
                                                </div>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th></th>
                                            <th>Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentRarity.map(h => (
                                            <tr>
                                                <td>
                                                    <NavLink to={`/hero/${h.id}-${h.shortname}`}>
                                                        <HeroCard className="interactive" hero={h} />
                                                    </NavLink>
                                                </td>
                                                <td className="hero-name roboto-slab text-lg pl-4">
                                                    <NavLink to={`/hero/${h.id}-${h.shortname}`}>{h.name}</NavLink>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </>
                            );
                        })}
                    </table>
                </div>
            </div>
        </>
    );
};

export default HeroList;
