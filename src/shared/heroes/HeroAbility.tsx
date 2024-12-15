import { Fragment, useState } from "react";
import { Hero } from "./types";
import { getAbilityInformation, getHeroAbilityTagTranslation, getMaxAbilityLevel } from "./utils";
import { Divider, Slider, SliderValue } from "@nextui-org/react";
import Markdown from "react-markdown";
import AssetImage from "../components/AssetImage";

type Props = {
    hero: Hero;
};

const HeroAbility = ({ hero }: Props) => {
    const maxLevel = getMaxAbilityLevel(hero.rarity);

    const [currentLevel, setCurrentLevel] = useState(maxLevel);

    const abilityInfo = getAbilityInformation(hero, currentLevel);

    const updateLevel = (value: SliderValue) => {
        if (!Array.isArray(value)) setCurrentLevel(value);
    };

    return (
        <div className="flex flex-row gap-2">
            <div className="flex-shrink-0">
                <AssetImage
                    className="w-16 h-16"
                    src={`/icons/heroes/abilities/${hero.ability.shortname.toLowerCase()}.png`}
                />
            </div>
            <div className="flex flex-col gap-3 w-full">
                <div className="roboto-slab text-3xl ability-name">{hero.ability.name}</div>
                <Slider
                    label="Level"
                    minValue={1}
                    maxValue={maxLevel}
                    value={currentLevel}
                    step={1}
                    showTooltip
                    onChange={updateLevel}
                    hideValue
                />
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-2 text-primary">
                        {abilityInfo.tags.map((tag, i) => (
                            <Fragment key={tag}>
                                <div className="text-2xl">{getHeroAbilityTagTranslation(tag)}</div>
                                {i < abilityInfo.tags.length - 1 && (
                                    <Divider orientation="vertical" className="h-auto bg-blue-800 border-primary" />
                                )}
                            </Fragment>
                        ))}
                    </div>
                    <div className="text-2xl ability-name">{`Level ${currentLevel}`}</div>
                </div>
                <div className="hero-ability">
                    <Markdown>{abilityInfo.description}</Markdown>
                </div>
            </div>
        </div>
    );
};

export default HeroAbility;
