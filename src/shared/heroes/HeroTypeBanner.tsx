import AssetImage from "../components/AssetImage";
import { HeroType } from "./types";
import { getHeroTypeTranslation } from "./utils";

type TypeBannerProps = {
    heroType: HeroType;
};

const HeroTypeBanner = ({ heroType }: TypeBannerProps) => {
    return (
        <div className="type-banner flex items-center w-44 h-8 p-1 rounded">
            <div className="image-holder flex-grow-0 flex items-center justify-center w-6 h-6">
                <AssetImage
                    src={`/icons/heroes/types/${heroType.toLowerCase()}.png`}
                    className="flex-grow-0 image-filter-brown max-h-6"
                />
            </div>
            <span className="flex-grow uppercase text-center">{getHeroTypeTranslation(heroType)}</span>
        </div>
    );
};

export default HeroTypeBanner;
