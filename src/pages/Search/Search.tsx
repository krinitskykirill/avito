import React from "react";
import cls from "./Search.module.scss";
import { SearchBar } from "@components/SearchComponents/SearchBar/SearchBar.tsx";
import { SearchResult } from "@components/SearchComponents/SearchResult/SearchResult.tsx";

const Search: React.FC = () => {
  //TODO стилизовать каретку у input
  return (
    <div className={cls.search}>
      <SearchBar />
      <SearchResult />
    </div>
  );
};

export default Search;
