import React from "react";
import cls from "./PreloadedItem.module.scss";

interface PreloadedItem {
  isGrid: boolean;
}

const PreloaderItem: React.FC<PreloadedItem> = ({ isGrid }) => {
  const containerClass = isGrid ? cls.item__grid : cls.item__list;
  const thumbClass = isGrid ? cls.thumb__grid : cls.thumb__list;
  const titleClass = isGrid ? cls.title__grid : cls.title__list;
  const channelClass = isGrid ? cls.channel__grid : cls.channel__list;
  const viewsClass = isGrid ? cls.views__grid : cls.views__list;
  const descClass = isGrid ? cls.desc__grid : cls.desc__list;

  return (
    <div className={containerClass}>
      <div className={thumbClass}></div>
      <div className={descClass}>
        <div className={titleClass}></div>
        <div>
          <div className={channelClass}></div>
          <div className={viewsClass}></div>
        </div>
      </div>
    </div>
  );
};

export default PreloaderItem;
