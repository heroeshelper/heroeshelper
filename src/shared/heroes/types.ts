export type Hero = {
  id: number;
  name: string;
  shortname: string;
  rarity: Rarity;
};

export enum Rarity {
  Common = "common",
  Rare = "rare",
  Epic = "epic",
  Legendary = "legendary",
}
