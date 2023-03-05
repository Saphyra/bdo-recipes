import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import itemData from "../data/items.json";
import "./item_details/item_details.css";

const ItemDetails = () => {
    const itemId = useLoaderData();
    const [item, setItem] = useState(itemData[itemId]);

    return (
        <div>{itemId}</div>
    );
}

export default ItemDetails;