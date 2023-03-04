import React from "react";

const SearchInput = ({ search }) => {
    return (
        <div className="search-container">
            <input
                className="search-input"
                type="text"
                placeholder="What are you looking for?"
                onChange={(e) => { search(e.target.value) }}
            />
        </div>
    );
}

export default SearchInput;