import React from "react";

const Price = ({ item }) => {
    const price = item.price || { general: 0, marketplace: 0 };

    return (
        <div className="item-price">
            <span>General: {price.general || "N/A"}</span>
            <span> / </span>
            <span>Marketplace: {price.marketplace || "N/A"}</span>
        </div>
    );
}

export default Price;