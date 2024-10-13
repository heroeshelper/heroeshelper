export type Hero = {
  id: number;
  name: string;
  shortname: string;
  rarity: Rarity;
  class: HeroClass;
  type: HeroType;
  color: HeroColor;
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
