import React from "react";
import { Link } from "react-router-dom";
import "./search_result_item.css";
import GeneralDescription from "./search_result_item/GeneralDescription";

const SearchResultItem = ({ item }) => {
    return (
        <Link to={"item/" + item.id} className="search-result-item">
            <h3>{item.name}</h3>
            <div className="search-result-item-content">
                <GeneralDescription item={item} />
            </div>
        </Link>
    );
}

export default SearchResultItem;