export type Hero = {
    id: number;
    name: string;
    shortname: string;
    rarity: Rarity;
    class: HeroClass;
    type: HeroType;
    color: HeroColor;
    ability: HeroAbilityData;
};

type HeroAbilityData = {
    shortname: string;
    descriptions: HeroAbilityDescription[];
    values: HeroAbilityValue[];
};

type HeroAbilityValue = {
    defaultValue: number;
    minLevel: number;
    levelIncrease: number;
    maximum: number;
};

type HeroAbilityDescription = {
    text: string;
    minLevel: number;
    tags: HeroAbilityTag[];
};

export type HeroAbilityInformation = {
    shortname: string;
    description: string;
    tags: HeroAbilityTag[];
};

export enum Rarity {
    Uncommon = "uncommon",
    Rare = "rare",
    Epic = "epic",
    Legendary = "legendary",
}

export enum HeroClass {
    Champion = "champion",
    Commander = "commander",
    Genius = "genius",
    GreatLeader = "greatLeader",
    Manipulator = "manipulator",
}

export enum HeroType {
    Infantry = "infantry",
    HeavyInfantry = "heavyInfantry",
    Ranged = "ranged",
    Cavalry = "cavalry",
    Siege = "siege",
}

export enum HeroColor {
    Red = "red",
    Blue = "blue",
    Green = "green",
    Purple = "purple",
    Yellow = "yellow",
}

export enum HeroAbilityTag {
    Buff = "buff",
}
