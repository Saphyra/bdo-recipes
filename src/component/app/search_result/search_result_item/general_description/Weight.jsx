import React from "react";

const Weight = ({ weight = { inventory: 0, warehouse: 0 } }) => {
    return (
        <div className="item-weight">
            <span className="subtitle">Weight:</span>
            <span>Inventory: {weight.inventory ? weight.inventory + " LT" : "N/A"}</span>
            <span> / </span>
            <span>Warehouse: {weight.warehouse ? weight.warehouse + " VT" : "N/A"}</span>
        </div>
    );
}

export default Weight;