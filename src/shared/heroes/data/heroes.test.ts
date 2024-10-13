import "@testing-library/jest-dom";
import unitData from "./heroes.json";
import { Hero, HeroClass, HeroColor, HeroType, Rarity } from "../types";

const heroes = unitData as Hero[];

describe.each(heroes)("Hero data", (hero) => {
  test(`${hero.name} has valid rarity`, () => {
    expect(Object.values(Rarity)).toContain(hero.rarity);
  });

  test(`${hero.name} has valid class`, () => {
    expect(Object.values(HeroClass)).toContain(hero.class);
  });

  test(`${hero.name} has valid type`, () => {
    expect(Object.values(HeroType)).toContain(hero.type);
  });

  test(`${hero.name} has valid color`, () => {
    expect(Object.values(HeroColor)).toContain(hero.color);
  });

  test(`${hero.name} has a unique id`, () => {
    expect(heroes.filter((x) => x.id === hero.id).length).toEqual(1);
  });
});
