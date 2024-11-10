import { HeroClass, HeroType, Rarity } from "./types";

export const getStarCount = (rarity: Rarity) => {
    switch (rarity) {
        case Rarity.Uncommon:
            return 2;
        case Rarity.Rare:
            return 3;
        case Rarity.Epic:
            return 4;
        case Rarity.Legendary:
            return 5;
        default:
            return 0;
    }
};

export const getHeroTypeTranslation = (type: HeroType) => {
    switch (type) {
        case HeroType.Cavalry:
            return "Cavalry";
        case HeroType.Infantry:
            return "Infantry";
        case HeroType.HeavyInfantry:
            return "Heavy Infantry";
        case HeroType.Ranged:
            return "Ranged";
        case HeroType.Siege:
            return "Siege";
        default:
            return "";
    }
};

export const getHeroClassTranslation = (type: HeroClass) => {
    switch (type) {
        case HeroClass.Champion:
            return "Champion";
        case HeroClass.Genius:
            return "Genius";
        case HeroClass.Commander:
            return "Commander";
        case HeroClass.GreatLeader:
            return "Great Leader";
        case HeroClass.Manipulator:
            return "Manipulator";
        default:
            return "";
    }
};
