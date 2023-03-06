import React, { useState } from "react";
import "./recipe_list/recipe_list.css";
import Header from "./recipe_list/Header";
import SearchInput from "./recipe_list/SearchInput";
import items from "../data/items.json";
import SearchResult from "./recipe_list/SearchResult";

const RecipeList = () => {
  const [query, setQuery] = useState([]);

  return (
    <div>
      <Header />
      <SearchInput setQuery={setQuery} />

      <hr />

      <SearchResult
        items={items}
        query={query}
      />
    </div>
  );
}

export default RecipeList;
