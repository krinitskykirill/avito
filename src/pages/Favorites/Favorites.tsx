import React from "react";
import cls from "./Favorites.module.scss";

const Favorites: React.FC = () => {
  return (
    <div className={cls.favorites}>
      <h1 className={cls.title}>Избранное</h1>
    </div>
  );
};

export default Favorites;
