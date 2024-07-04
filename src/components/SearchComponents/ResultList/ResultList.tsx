import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store.ts";
import cls from "./ResultList.module.scss";
import { ResultItem } from "@components/SearchComponents/ResultItem/ResultItem.tsx";
import { PreloaderItem } from "@components/SearchComponents/PreloaderItem/PreloaderItem.tsx";

interface ResultListProps {
  isGrid: boolean;
}

export const ResultList: React.FC<ResultListProps> = ({ isGrid }) => {
  const { videos, status } = useSelector((state: RootState) => state.video);

  return (
    <div className={`${cls.result__list} ${isGrid ? cls.grid : cls.list}`}>
      {status === "succeeded" ? (
        videos.length > 0 ? (
          videos.map((video) => (
            <ResultItem key={video.id} video={video} isGrid={isGrid} />
          ))
        ) : (
          <div className={cls.notfound}>Результатов не найдено</div>
        )
      ) : status === "loading" ? (
        <div className={`${cls.result__list} ${isGrid ? cls.grid : cls.list}`}>
          {Array.from({ length: 12 }).map((_, index) => (
            <PreloaderItem key={index} isGrid={isGrid} />
          ))}
        </div>
      ) : status === "failed" ? (
        <div>Error loading videos</div>
      ) : null}
    </div>
  );
};
