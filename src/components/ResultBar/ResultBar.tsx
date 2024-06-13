import React from "react";
import cls from "./ResultBar.module.scss";

import listIcon from "@assets/img/list.svg";
import gridIcon from "@assets/img/grid.svg";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store.ts";

interface ResultBarProps {
  setList: () => void;
  setGrid: () => void;
  isGrid: boolean;
}

export const ResultBar: React.FC<ResultBarProps> = ({
  setList,
  setGrid,
  isGrid,
}) => {
  const { videos, status } = useSelector((state: RootState) => state.video);

  if (status !== "succeeded") return null;
  if (videos.length === 0) return null;

  const request = videos[0]?.query ?? "";
  const count = videos[0]?.viewCount ?? "";

  return (
    <div className={cls.result__bar}>
      {request ? (
        <div>
          <h2 className={cls.title}>
            Видео по запросу <span className={cls.request}>«{request}» </span>
            <span className={cls.count}>{count}</span>
          </h2>
        </div>
      ) : (
        <h2 className={cls.trends}>Популярные видео:</h2>
      )}
      <div className={cls.isGrids}>
        <button className={cls.isGrid} onClick={setList}>
          <img
            className={`${cls.icon} ${!isGrid ? cls.current : ""}`}
            src={listIcon}
            alt="Список"
          />
        </button>
        <button className={cls.isGrid} onClick={setGrid}>
          <img
            className={`${cls.icon} ${isGrid ? cls.current : ""}`}
            src={gridIcon}
            alt="Сетка"
          />
        </button>
      </div>
    </div>
  );
};
