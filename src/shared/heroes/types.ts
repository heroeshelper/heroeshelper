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
    name: string;
    descriptions: HeroAbilityDescription[];
    abilityValues: HeroAbilityValue[];
};

type HeroAbilityValue = {
    values: number[];
    minLevel: number;
};

type HeroAbilityDescription = {
    text: string;
    minLevel: number;
    tags: HeroAbilityTag[];
};

export type HeroAbilityInformation = {
    name: string;
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
    Debuff = "debuff",
    Stomp = "stomp",
    Stun = "stun",
    Heal = "heal",
    Burn = "burn",
    AreaStrike = "areaStrike",
    Teleport = "teleport",
    Summon = "summon",
    Stormcast = "stormcast",
    Recovery = "recovery",
    Shield = "shield",
    RangedStrike = "rangedStrike",
    Poison = "poison",
    Bleed = "bleed",
    Taunt = "taunt",
    MindControl = "mindControl",
    Invincibility = "invincibility",
    AbilityBlock = "abilityBlock",
    SoulLink = "soulLink",
    Focus = "focus",
    MeleeStrike = "meleeStrike",
}
