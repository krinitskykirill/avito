import React from "react";
import heart from "@assets/img/heart.svg";
import cls from "./Heart.module.scss";

interface HeartProps {
  isIdle: boolean;
}

export const Heart: React.FC<HeartProps> = ({ isIdle }) => {
  return (
    <button className={isIdle ? cls.idle : cls.heart__container}>
      <img alt={""} className={cls.heart} src={heart}></img>
    </button>
  );
};
