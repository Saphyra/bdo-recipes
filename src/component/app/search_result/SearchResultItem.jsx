import React from "react";
import "./search_result_item.css";
import GeneralDescription from "./search_result_item/GeneralDescription";
import Price from "./search_result_item/Price";

const SearchResultItem = ({ item }) => {
    return (
        <div className="search-result-item">
            <h3>{item.name}</h3>
            <div className="search-result-item-content">
                <GeneralDescription item={item} />
                <Price item={item} />
            </div>
        </div>
    );
}

export default SearchResultItem;