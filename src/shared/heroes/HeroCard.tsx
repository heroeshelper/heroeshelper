import { useCallback } from "react";
import { Hero } from "./types";
import AssetImage from "../components/AssetImage";

type Props = {
    hero: Hero | null;
    onClick?: (shortname: string) => void;
    disabled?: boolean;
};

const HeroCard = ({ hero, onClick, disabled }: Props) => {
    const onCardClick = useCallback(() => {
        hero && onClick?.(hero.shortname);
    }, [hero, onClick]);

    return (
        <div
            className={`relative herocard ${hero && hero.rarity} ${!disabled && hero && onClick && "cursor-pointer"} ${
                disabled && "disabled"
            }`}
            onClick={onCardClick}
        >
            {hero && <AssetImage src={`/heroes/${hero.shortname}.png`} alt={hero.name} width={216} height={260} />}
            {hero && (
                <div className="type-banner absolute h-14 w-6 top-0 left-0 flex items-end">
                    <AssetImage src={`/icons/heroes/${hero.type}.png`} />
                </div>
            )}
        </div>
    );
};

export default HeroCard;
