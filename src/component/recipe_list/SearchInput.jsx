import React from "react";

const SearchInput = ({ setQuery }) => {
    return (
        <div className="search-container">
            <input
                className="search-input"
                type="text"
                placeholder="What are you looking for?"
                onChange={(e) => { setQuery(e.target.value.toLowerCase().split(" ")) }}
            />
        </div>
    );
}

export default SearchInput;