import React from "react";
import SearchResultItem from "./search_result/SearchResultItem";
import "./search_result.css";

const SearchResult = ({ items, query }) => {
    const matches = (item) => {
        return query.length == 0 || query.some(word => item.name.toLowerCase().includes(word));
    }

    const getSeachResult = (matchedItems) => {
        return matchedItems.map((item) => <SearchResultItem key={item.id} item={item} />)
    }

    const matchedItems = Object.values(items)
        .filter((item) => matches(item))
        .sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div>
            <div className="result-count">Found: {matchedItems.length}</div>
            <div className="search-result">

                {getSeachResult(matchedItems)}
            </div>
        </div>

    );
}

export default SearchResult;