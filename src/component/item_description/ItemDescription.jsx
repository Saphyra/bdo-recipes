import React from "react";
import Effects from "./Effects";
import Price from "./Price";
import Souce from "./Source";
import Weight from "./Weight";
import "./item_description.css";
import Ingredients from "./Ingredients";

const ItemDescription = ({ item, items, shouldDisplayIngredients = false }) => {
    return (
        <div className="item-description">
            <div className="general-description">
                {item.source && <Souce source={item.source} />}

                <Weight weight={item.weight} />

                <Price price={item.price} />
            </div>

            <div className="effects-and-ingredients">
                {item.effect && <Effects effect={item.effect} />}

                {shouldDisplayIngredients && item.ingredients && <Ingredients currentItemId={item.id} ingredients={item.ingredients} items={items} />}
            </div>
        </div>
    );
}

export default ItemDescription;