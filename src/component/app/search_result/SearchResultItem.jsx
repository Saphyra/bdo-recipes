import React from "react";
import "./search_result_item.css";
import GeneralDescription from "./search_result_item/GeneralDescription";

const SearchResultItem = ({ item }) => {
    return (
        <div className="search-result-item">
            <h3>{item.name}</h3>
            <div className="search-result-item-content">
                <GeneralDescription item={item} />
            </div>
        </div>
    );
}

export default SearchResultItem;