import React from "react";
import Effects from "./Effects";
import Price from "./Price";
import Souce from "./Source";
import Weight from "./Weight";
import "./item_description.css";
import Ingredients from "./Ingredients";
import Crafting from "./Crafting";

const ItemDescription = ({ item, items, shouldDisplayCrafting = false }) => {
    return (
        <div className="item-description">
            <div className="general-description">
                {item.source && <Souce source={item.source} />}

                <Weight weight={item.weight} />

                <Price price={item.price} />
            </div>

            <div className="effects-and-ingredients">
                {item.effect && <Effects effect={item.effect} />}

                {shouldDisplayCrafting && item.crafting && <Crafting currentItemId={item.id} crafting={item.crafting} items={items} />}
            </div>
        </div>
    );
}

export default ItemDescription;