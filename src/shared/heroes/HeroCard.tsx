import { useCallback } from "react";
import { Hero } from "./types";
import AssetImage from "../components/AssetImage";
import { isNotNil } from "@heroeshelper/utils/isNil";

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
            className={`relative herocard ${isNotNil(onClick) && "interactive"} ${hero && hero.rarity} ${
                !disabled && hero && onClick && "cursor-pointer"
            } ${disabled && "disabled"}`}
            onClick={onCardClick}
        >
            {hero && <AssetImage src={`/heroes/${hero.shortname}.png`} alt={hero.name} width={216} height={260} />}
            {hero && (
                <div className="type-banner absolute h-14 w-6 top-0 left-0 flex items-end">
                    <AssetImage src={`/icons/heroes/types/${hero.type.toLowerCase()}.png`} />
                </div>
            )}
            {hero && (
                <>
                    <div className={`color-banner absolute h-6 w-6 top-0 left-0 flex flex-col items-end ${hero.color}`}>
                        <AssetImage src={`/icons/heroes/colors/${hero.color}.png`} />
                    </div>
                    <div className={`color-banner-triangle ${hero.color} absolute left-0 top-6 w-0 h-0`} />
                </>
            )}
        </div>
    );
};

export default HeroCard;
