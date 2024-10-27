import unitData from "./heroes.json";
import { HeroClass, HeroColor, HeroType, Rarity } from "../types";
import { describe, test, expect } from "vitest";

const heroes = unitData;

describe.each(heroes)("Hero data", hero => {
    test(`${hero.name} has a valid rarity`, () => {
        expect(Object.values(Rarity)).toContain(hero.rarity);
    });

    test(`${hero.name} has a valid class`, () => {
        expect(Object.values(HeroClass)).toContain(hero.class);
    });

    test(`${hero.name} has a valid type`, () => {
        expect(Object.values(HeroType)).toContain(hero.type);
    });

    test(`${hero.name} has a valid color`, () => {
        expect(Object.values(HeroColor)).toContain(hero.color);
    });

    test(`${hero.name} has a unique id`, () => {
        expect(heroes.filter(x => x.id === hero.id).length).toEqual(1);
    });

    test(`${hero.name} has a unique shortname`, () => {
        expect(heroes.filter(x => x.shortname === hero.shortname).length).toEqual(1);
    });
});
