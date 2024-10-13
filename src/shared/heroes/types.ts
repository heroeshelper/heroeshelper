export type Hero = {
  id: number;
  name: string;
  shortname: string;
  rarity: Rarity;
};

export enum Rarity {
  Uncommon = "uncommon",
  Rare = "rare",
  Epic = "epic",
  Legendary = "legendary",
}
