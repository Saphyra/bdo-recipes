import React from "react";
import skillNameLocalization from "../../../../../data/localization/skill_name.json"
import skillLevelLocalization from "../../../../../data/localization/skill_level.json"

const Skill = ({ skill }) => {
    const translateSkill = (skill) => {
        return skillNameLocalization[skill.name] + ", " + skillLevelLocalization[skill.level.toString()];
    }

    return (
        <div className="item-skill">
            <span className="subtitle">Skill:</span>
            <span>{translateSkill(skill)}</span>
        </div>
    );
}

export default Skill;