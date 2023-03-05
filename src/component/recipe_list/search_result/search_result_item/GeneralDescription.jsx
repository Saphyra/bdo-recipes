import React from "react";
import Effect from "./general_description/Effect";
import Price from "./general_description/Price";
import Skill from "./general_description/Skill";
import Weight from "./general_description/Weight";

const GeneralDescription = ({ item }) => {
    return (
        <div className="general-description">
            {item.skill && <Skill skill={item.skill} />}

            <Weight weight={item.weight} />

            <Price price={item.price} />

            {item.effect && <Effect effect={item.effect} />}
        </div>
    );
}

export default GeneralDescription;