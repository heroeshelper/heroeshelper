import unitData from "./heroes.json";
import { Hero, HeroClass, HeroColor, HeroType, Rarity } from "../types";
import { describe, test, expect } from "vitest";
import { getAbilityInformation, getMaxAbilityLevel } from "../utils";

const heroes: Hero[] = unitData;

describe.each(heroes)("$name data", hero => {
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

    test(`${hero.name} has a unique ability shortname`, () => {
        expect(heroes.filter(x => x.ability.shortname === hero.ability.shortname).length).toEqual(1);
    });

    test(`${hero.name} has a valid ability description`, () => {
        for (let i = 1; i <= getMaxAbilityLevel(hero.rarity); i++) {
            const description = getAbilityInformation(hero, i);
            expect(description).toBeTruthy();
            expect(description).not.toContain("{");
            expect(description).not.toContain("}");
        }
    });
});
