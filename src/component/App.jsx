import React, { useState } from "react";
import "./app/app.css";
import Header from "./app/Header";
import SearchInput from "./app/SearchInput";
import itemData from "../data/items.json";
import SearchResult from "./app/SearchResult";

const App = () => {
  const [query, setQuery] = useState([]);
  const [items, setItems] = useState(itemData);

  return (
    <div>
      <Header />
      <SearchInput setQuery={setQuery} />

      <hr />

      <SearchResult
        items={items}
        query={query} />
    </div>
  );
}

export default App;
