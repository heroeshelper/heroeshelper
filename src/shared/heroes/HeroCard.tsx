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
            className={`herocard ${hero && hero.rarity} ${!disabled && hero && onClick && "cursor-pointer"} ${
                disabled && "disabled"
            }`}
            onClick={onCardClick}
        >
            {hero && <AssetImage src={`/heroes/${hero.shortname}.png`} alt={hero.name} width={216} height={260} />}
        </div>
    );
};

export default HeroCard;
