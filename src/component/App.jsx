import React, { useState } from "react";
import "./app/app.css";
import Header from "./app/Header";
import SearchInput from "./app/SearchInput";
import itemData from "../data/items.json";
import SearchResult from "./app/SearchResult";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [items, setItems] = useState(itemData);

  return (
    <div>
      <Header />
      <SearchInput search={setSearchText} />

      <hr />

      <SearchResult
        items={items}
        searchText={searchText} />
    </div>
  );
}

export default App;
