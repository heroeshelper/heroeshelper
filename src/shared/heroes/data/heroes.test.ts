import "@testing-library/jest-dom";
import unitData from "./heroes.json";
import { Hero, Rarity } from "../types";

const heroes = unitData as Hero[];

describe.each(heroes)("Hero data", (hero) => {
  test(`${hero.name} has valid rarity`, () => {
    expect(Object.values(Rarity)).toContain(hero.rarity);
  });
});
