import React, { useEffect, useState } from "react";
import { fetchVideos } from "@/redux/videoSlice.ts";
import { RootState, useAppDispatch } from "@/redux/store.ts";
import { useSelector } from "react-redux";
import { Input } from "@components/Common/Input/Input.tsx";
import { Button } from "@components/Common/Button/Button.tsx";
import cls from "./SearchBar.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { Heart } from "@components/Common/Heart/Heart.tsx";

export const SearchBar: React.FC = () => {
  const { query } = useParams();
  const [queryState, setQueryState] = useState(query || "");
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { status } = useSelector((state: RootState) => state.video);

  useEffect(() => {
    if (query) {
      setQueryState(query || "");
      dispatch(fetchVideos({ queryState: query || "" }));
    }
  }, [dispatch, query]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryState(e.target.value);
  };

  const handleSearch = () => {
    dispatch(fetchVideos({ queryState: queryState }));
    if (query !== queryState) {
      navigate(`/search/${encodeURIComponent(queryState)}`, { replace: true });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const containerClass =
    status !== "idle" ? cls.search__bar__succeeded : cls.search__bar__idle;

  const inputClass = status !== "idle" ? cls.input__succeeded : cls.input__idle;

  const isIdle = status === "idle";

  return (
    <div className={containerClass}>
      <h1 className={cls.title}>Поиск видео</h1>
      <div className={cls.input__container}>
        <Input
          className={inputClass}
          placeholder="Что хотите посмотреть?"
          value={queryState}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />
        <Heart isIdle={isIdle} />
        <Button
          disabled={!queryState}
          className={cls.button}
          isAccept={true}
          onClick={handleSearch}
        >
          Найти
        </Button>
      </div>
    </div>
  );
};
