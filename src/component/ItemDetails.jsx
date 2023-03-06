import React, { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import items from "../data/items.json";
import Header from "./item_details/Header";
import "./item_details/item_details.css";
import ItemDesctiption from "./item_description/ItemDescription"

const ItemDetails = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => setItem(items[itemId]), [itemId]);
    const navigate = useNavigate();

    return (
        <div className="item-details">
            <Header itemName={item.name} navigate={navigate} />

            <ItemDesctiption
                item={item}
                items={items}
                shouldDisplayIngredients={true}
            />

            <hr />
        </div>
    );
}

export default ItemDetails;