import unitData from "./heroes.json";
import { Hero, HeroAbilityTag, HeroClass, HeroColor, HeroType, Rarity } from "../types";
import { describe, test, expect } from "vitest";
import { getAbilityInformation, getMaxAbilityLevel } from "../utils";

const heroes = unitData as Hero[];

describe.each(heroes)("$name data", hero => {
    const levels = [...Array(getMaxAbilityLevel(hero.rarity) + 1).keys()].slice(1);

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

    test(`${hero.name} ability has different minimum level for each description`, () => {
        expect(hero.ability.descriptions.length).toEqual(new Set(hero.ability.descriptions.map(f => f.minLevel)).size);
    });

    test.each(levels)(`${hero.name} has a valid ability description for level %d`, (level: number) => {
        const description = getAbilityInformation(hero, level);
        expect(description).toBeTruthy();
        expect(description).not.toContain("{");
        expect(description).not.toContain("}");
    });

    test.each(levels)(`${hero.name} has valid tags for level %d`, (level: number) => {
        const description = getAbilityInformation(hero, level);
        description.tags.forEach(tag => expect(Object.values(HeroAbilityTag)).toContain(tag));
    });
});
