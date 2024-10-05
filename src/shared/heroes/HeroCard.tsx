import { Hero } from "./types";
import Image from "next/image";

type Props = {
  hero: Hero;
};

const HeroCard = ({ hero }: Props) => {
  return (
    <div className={`herocard ${hero.rarity}`}>
      <Image
        src={`/assets/heroes/${hero.shortname}.png`}
        alt={hero.shortname}
        width={216}
        height={260}
      />
    </div>
  );
};

export default HeroCard;
