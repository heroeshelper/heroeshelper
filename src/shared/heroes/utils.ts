import { Hero, HeroAbilityInformation, HeroClass, HeroType, Rarity } from "./types";

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

export const getRarityArticle = (rarity: Rarity) => {
    switch (rarity) {
        case Rarity.Uncommon:
        case Rarity.Epic:
            return "an";
        case Rarity.Rare:
        case Rarity.Legendary:
        default:
            return "a";
    }
};

export const getMaxAbilityLevel = (rarity: Rarity) => {
    switch (rarity) {
        case Rarity.Legendary:
            return 40;
        case Rarity.Epic:
            return 25;
        case Rarity.Rare:
            return 15;
        case Rarity.Uncommon:
            return 5;
        default:
            return 0;
    }
};

const stringFormat = (formatString: string, replacementArray: (string | number)[]) => {
    return formatString.replace(
        /\{(\d+)\}/g, // Matches placeholders, e.g. '{1}'
        function formatStringReplacer(_, placeholderIndex) {
            placeholderIndex = Number(placeholderIndex);

            if (placeholderIndex < 0 || placeholderIndex > replacementArray.length - 1) {
                return placeholderIndex;
            }

            return replacementArray[placeholderIndex];
        },
    );
};

export const getAbilityInformation = (hero: Hero, level: number): HeroAbilityInformation => {
    if (level <= 0) throw new Error("Levels cannot be zero or lower");

    const description = hero.ability.descriptions
        .filter(x => x.minLevel <= level)
        .toSorted((a, b) => b.minLevel - a.minLevel)[0];

    const abilityValues = hero.ability.abilityValues.map(
        x => x.values[Math.max(0, Math.min(x.values.length - 1, level - x.minLevel))],
    );

    return {
        name: hero.ability.name,
        shortname: hero.ability.shortname,
        tags: description.tags,
        description: stringFormat(description.text, abilityValues),
    };
};
