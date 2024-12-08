import AssetImage from "../components/AssetImage";
import { HeroClass } from "./types";
import { getHeroClassTranslation } from "./utils";

type ClassBannerProps = {
    heroClass: HeroClass;
};

const HeroClassBanner = ({ heroClass }: ClassBannerProps) => {
    return (
        <div className="class-banner flex items-center w-44 h-8 p-1 rounded">
            <div className="image-holder flex-grow-0 flex items-center justify-center w-6 h-6">
                <AssetImage
                    src={`/icons/heroes/classes/${heroClass.toLowerCase()}.png`}
                    className="flex-grow-0 image-filter-blue max-h-6"
                />
            </div>
            <span className="flex-grow uppercase text-center">{getHeroClassTranslation(heroClass)}</span>
        </div>
    );
};

export default HeroClassBanner;
