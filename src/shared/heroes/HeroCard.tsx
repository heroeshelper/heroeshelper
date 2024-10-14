import { useCallback } from "react";
import { Hero } from "./types";
import Image from "next/image";

type Props = {
  hero: Hero | null;
  onClick?: (shortname: string) => void;
};

const HeroCard = ({ hero, onClick }: Props) => {
  const onCardClick = useCallback(() => {
    hero && onClick?.(hero.shortname);
  }, [hero, onClick]);

  return (
    <div
      className={`herocard ${hero && hero.rarity} ${
        onClick && "cursor-pointer"
      }`}
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
