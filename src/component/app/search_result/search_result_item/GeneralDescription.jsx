import React from "react";
import skillNameLocalization from "../../../../data/localization/skill_name.json"
import skillLevelLocalization from "../../../../data/localization/skill_level.json"

const GeneralDescription = ({ item }) => {
    const translateSkill = (skill) => {
        return skillNameLocalization[skill.name] + ", " + skillLevelLocalization[skill.level.toString()];
    }

    const getSkill = () => {
        return (
            <div className="item-skill">
                <span className="subtitle">Skill:</span>
                <span>{translateSkill(item.skill)}</span>
            </div>
        );
    }

    const getExtra = (effect) => {
        const extraList = effect.extra.sort((a, b) => a.localeCompare(b))
        .map((extraEffect, index) => <li key={index}>{extraEffect}</li>)

        return (
            <ul>
                {extraList}
            </ul>
        );
    }

    const convertSeconds = (seconds) => {
        if (seconds > 120) {
            return seconds / 60 + " min";
        } else {
            return seconds + " sec";
        }
    }

    const getEffect = () => {
        const effect = item.effect;

        return (
            <div className="item-effect">
                <span className="subtitle">Effect:</span>
                {effect.duration && <div>Duration: {convertSeconds(effect.duration)}</div>}
                {effect.cooldown && <div>Cooldown: {convertSeconds(effect.cooldown)}</div>}
                {effect.extra && effect.extra.length && getExtra(effect)}
            </div>
        );
    }

    const price = item.price || { general: 0, marketplace: 0 };
    const weight = item.weight || { inventory: 0, warehouse: 0 };

    return (
        <div className="general-description">
            {item.skill && getSkill()}

            <div className="item-weight">
                <span className="subtitle">Weight:</span>
                <span>Inventory: {weight.inventory ? weight.inventory + " LT" : "N/A"}</span>
                <span> / </span>
                <span>Warehouse: {weight.warehouse ? weight.warehouse + " VT" : "N/A"}</span>
            </div>

            <div className="item-price">
                <span className="subtitle">Price:</span>
                <span>General: {price.general || "N/A"}</span>
                <span> / </span>
                <span>Marketplace: {price.marketplace || "N/A"}</span>
            </div>

            {item.effect && getEffect()}
        </div>
    );
}

export default GeneralDescription;