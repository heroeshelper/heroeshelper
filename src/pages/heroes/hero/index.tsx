import NotFound from "@heroeshelper/pages/error/NotFound";
import { useHeroes } from "@heroeshelper/shared/heroes";
import HeroCard from "@heroeshelper/shared/heroes/HeroCard";
import { isNil } from "@heroeshelper/utils/isNil";
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
                        <div className="type-and-class"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroPage;
