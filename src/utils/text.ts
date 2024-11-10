import { HeroClass, HeroType } from "@heroeshelper/shared/heroes/types";

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
