import React from "react";
import { FavoritesItem } from "@components/FavoritesComponents/FavoritesContent/FavoritesItem.tsx";

import cls from "./FavoritesContent.module.scss";

interface FavoritesListProps {}

export const FavoritesList: React.FC<FavoritesListProps> = () => {
  return (
    <div className={cls.list__container}>
      <FavoritesItem link={"/search/кал"} name={"Кристина Амбросова"} />
      <FavoritesItem link={"/search/кал"} name={"Кристина Амбросова"} />
      <FavoritesItem link={"/search/кал"} name={"Кристина Амбросова"} />
      <FavoritesItem link={"/search/кал"} name={"Кристина Амбросова"} />
      <FavoritesItem link={"/search/кал"} name={"Кристина Амбросова"} />
      <FavoritesItem link={"/search/кал"} name={"Кристина Амбросова"} />
      <FavoritesItem link={"/search/кал"} name={"Кристина Амбросова"} />
      <FavoritesItem link={"/search/кал"} name={"Кристина Амбросова"} />
      <FavoritesItem link={"/search/кал"} name={"Кристина Амбросова"} />
      <FavoritesItem link={"/search/кал"} name={"Кристина Амбросова"} />
      <FavoritesItem link={"/search/кал"} name={"Кристина Амбросова"} />
    </div>
  );
};
