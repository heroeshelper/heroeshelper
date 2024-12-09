import { describe, expect, it } from "vitest";
import { Hero } from "./types";
import { getAbilityInformation } from "./utils";

var hero1 = {
    ability: {
        shortname: "test",
        descriptions: [
            {
                text: "Test {0}",
                minLevel: 0,
                tags: ["test"],
            },
        ],
        values: [{ defaultValue: 50, minLevel: 1, levelIncrease: 10, maximum: 120 }],
    },
} as unknown as Hero;

var hero2 = {
    ability: {
        shortname: "test",
        descriptions: [
            {
                text: "Test {0}",
                minLevel: 0,
                tags: ["test"],
            },
            {
                text: "Test2 {0}",
                minLevel: 6,
                tags: ["test"],
            },
        ],
        values: [{ defaultValue: 50, minLevel: 1, levelIncrease: 10, maximum: 120 }],
    },
} as unknown as Hero;

describe("getAbilityInformation", () => {
    it("Should correctly format strings", () => {
        expect(getAbilityInformation(hero1, 1).description).toEqual("Test 50");
    });

    it("Should correctly use maximum values", () => {
        expect(getAbilityInformation(hero1, 40).description).toEqual("Test 120");
    });

    it("Should correctly increase for each level value", () => {
        expect(getAbilityInformation(hero1, 4).description).toEqual("Test 80");
    });

    it.each([0, -1, -20])("Should throw with incorrect parameters", (level: number) => {
        expect(() => getAbilityInformation(hero1, level)).toThrow();
    });

    it.each([
        { level: 3, text: "Test 70" },
        { level: 6, text: "Test2 100" },
        { level: 9, text: "Test2 120" },
    ])("Should pick the correct description based on level", ({ level, text }) => {
        expect(getAbilityInformation(hero2, level).description).toEqual(text);
    });
});
