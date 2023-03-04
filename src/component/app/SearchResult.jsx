import React from "react";
import SearchResultItem from "./search_result/SearchResultItem";
import "./search_result.css";

const SearchResult = ({ items, searchText }) => {
    const matches = (item) => {
        const words = searchText.toLowerCase().split(" ");
        const names = item.name.toLowerCase().split(" ");

        return names.some(name => words.some(word => name.includes(word)));
    }

    const getSeachResult = (matchedItems) => {
        return matchedItems.map((item) => <SearchResultItem key={item.id} item={item} />)
    }

    const matchedItems = Object.values(items)
        .filter((item) => matches(item)).
        sort((a, b) => a.name.localeCompare(b.name));

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