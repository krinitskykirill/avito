import React from "react";
import { Link } from "react-router-dom";
import cls from "./FavoritesContent.module.scss";

interface FavoritesItemProps {
  name: string;
  link: string;
}

export const FavoritesItem: React.FC<FavoritesItemProps> = ({ name, link }) => {
  return (
    <div className={cls.item}>
      <Link className={cls.link} to={link}>
        {name}
      </Link>
      <div className={cls.buttons}>
        <button className={cls.edit}>Изменить</button>
        <button className={cls.delete}>Удалить</button>
      </div>
    </div>
  );
};
