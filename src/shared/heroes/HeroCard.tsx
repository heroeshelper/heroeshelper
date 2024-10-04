import { Hero } from "./types";
import Image from "next/image";
import herostyles from "@/app/styles/heroes.module.scss";

type Props = {
  hero: Hero;
};

const HeroCard = ({ hero }: Props) => {
  return (
    <div className={`${herostyles.herocard} ${hero.rarity}`}>
      <Image
        src={`/assets/heroes/${hero.shortname}.png`}
        alt={hero.shortname}
        style={{ position: "relative" }}
        width={216}
        height={260}
      />
    </div>
  );
};

export default HeroCard;
