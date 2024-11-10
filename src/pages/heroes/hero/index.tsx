import NotFound from "@heroeshelper/pages/error/NotFound";
import AssetImage from "@heroeshelper/shared/components/AssetImage";
import { useHeroes } from "@heroeshelper/shared/heroes";
import HeroCard from "@heroeshelper/shared/heroes/HeroCard";
import { isNil } from "@heroeshelper/utils/isNil";
import { getHeroClassTranslation, getHeroTypeTranslation } from "@heroeshelper/utils/text";
import { useParams } from "react-router-dom";

const HeroPage = () => {
    const heroes = useHeroes();

    let { id } = useParams();
    id = id?.split("-")[0];

    const hero = heroes.find(x => x.id.toString() === id);

    if (isNil(hero)) return NotFound();

    return (
        <div className="flex flex-col items-center gap-2 mt-8 mb-8 flex-grow">
            <div className="hero-info flex flex-col">
                <div className="main-info flex gap-4">
                    <div className="hero-card-holder">
                        <HeroCard hero={hero} />
                    </div>
                    <div className="flex flex-col">
                        <div className="name-holder">
                            <h2 className="hero-name text-4xl roboto-slab font-semibold uppercase">{hero.name}</h2>
                        </div>
                        <div className="type-and-class flex flex-col gap-2">
                            <div className="class-banner flex items-center w-44 h-8 p-1 rounded">
                                <div className="image-holder flex-grow-0 flex items-center justify-center w-6 h-6">
                                    <AssetImage
                                        src={`/icons/heroes/classes/${hero.class.toLowerCase()}.png`}
                                        className="max-h-full flex-grow-0 image-filter-blue"
                                    />
                                </div>
                                <span className="flex-grow uppercase text-center">
                                    {getHeroClassTranslation(hero.class)}
                                </span>
                            </div>
                            <div className="type-banner flex items-center w-44 h-8 p-1 rounded">
                                <div className="image-holder flex-grow-0 flex items-center justify-center w-6 h-6">
                                    <AssetImage
                                        src={`/icons/heroes/types/${hero.type.toLowerCase()}.png`}
                                        className="max-h-full flex-grow-0 image-filter-brown"
                                    />
                                </div>
                                <span className="flex-grow uppercase text-center">
                                    {getHeroTypeTranslation(hero.type)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroPage;
