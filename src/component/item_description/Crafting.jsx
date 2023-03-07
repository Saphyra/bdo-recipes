import React from "react";
import Ingredients from "./Ingredients";

const Crafting = ({ currentItemid, crafting, items }) => {
    return (
        <div className="item-crafting">
            <div>
                <span className="subtitle">Amount:</span> <span>{crafting.amount || "TODO"}</span>
            </div>

            <Ingredients
                currentItemId={currentItemid}
                ingredients={crafting.ingredients}
                items={items}
            />
        </div>
    );
}

export default Crafting;