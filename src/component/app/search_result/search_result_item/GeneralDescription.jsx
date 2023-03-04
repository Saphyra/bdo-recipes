import React from "react";
import skillNameLocalization from "../../../../data/localization/skill_name.json"
import skillLevelLocalization from "../../../../data/localization/skill_level.json"

const GeneralDescription = ({ item }) => {
    const translateSkill = (skill) => {
        return skillNameLocalization[skill.name] + ", " + skillLevelLocalization[skill.level.toString()];
    }

    return (
        <div className="general-description">
            {item.skill && <span>Skill: {translateSkill(item.skill)}</span>}
        </div>
    );
}

export default GeneralDescription;