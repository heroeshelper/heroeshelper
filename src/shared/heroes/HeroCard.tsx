import { useCallback } from "react";
import { Hero } from "./types";
import Image from "next/image";

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
      className={`herocard ${hero && hero.rarity} ${
        !disabled && onClick && "cursor-pointer"
      } ${disabled && "disabled"}`}
      onClick={onCardClick}
    >
      {hero && (
        <Image
          src={`/assets/heroes/${hero.shortname}.png`}
          alt={hero.shortname}
          width={216}
          height={260}
        />
      )}
    </div>
  );
};

export default HeroCard;
