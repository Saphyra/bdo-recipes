import React from "react";
import { Link } from "react-router-dom";
import "./search_result_item.css";
import ItemDescription from "../../item_description/ItemDescription"

const SearchResultItem = ({ item }) => {
    return (
        <Link to={"item/" + item.id} className="search-result-item">
            <h3>{item.name}</h3>
            <div className="search-result-item-content">
                <ItemDescription item={item} />
            </div>
        </Link>
    );
}

export default SearchResultItem;