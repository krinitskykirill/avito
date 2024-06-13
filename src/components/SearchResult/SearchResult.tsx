import cls from "./SearchResult.module.scss";
import React, { useState } from "react";
import { ResultBar } from "@components/ResultBar/ResultBar.tsx";
import { ResultList } from "@components/ResultList/ResultList.tsx";

export const SearchResult: React.FC = () => {
  const [isGrid, setIsGrid] = useState<boolean>(true);

  const setList = () => {
    if (!isGrid) return;
    setIsGrid(false);
  };
  const setGrid = () => {
    if (isGrid) return;
    setIsGrid(true);
  };

  return (
    <div className={cls.search__result}>
      <ResultBar setList={setList} setGrid={setGrid} isGrid={isGrid} />
      <ResultList isGrid={isGrid} />
    </div>
  );
};
