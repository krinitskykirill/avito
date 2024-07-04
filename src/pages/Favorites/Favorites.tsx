import React from "react";
import cls from "./Favorites.module.scss";
import { FavoritesList } from "@components/FavoritesComponents/FavoritesContent/FavoritesList.tsx";

const Favorites: React.FC = () => {
  return (
    <div className={cls.favorites}>
      <h1 className={cls.title}>Избранное</h1>
      <FavoritesList />
    </div>
  );
};

export default Favorites;
