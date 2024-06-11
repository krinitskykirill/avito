import React from "react";
import { decode } from "he";
import useWindowWidth from "@/hooks/useWindowWidth.ts";
import {
  createVideoLink,
  formatViewCount,
} from "@components/ResultItem/utils.ts";
import { VideoCard } from "@/redux/videoSlice.ts";

import videoDesktop from "@assets/img/video.svg";
import videoMobile from "@assets/img/video-mobile.svg";
import cls from "./ResultItem.module.scss";

interface ResultItemProps {
  isGrid: boolean;
  video: VideoCard;
}

const ResultItem: React.FC<ResultItemProps> = ({ isGrid, video }) => {
  const currentWidth = useWindowWidth();

  const videoLink = createVideoLink(video.id);
  const title = decode(video.title);
  const channel = decode(video.channelTitle);
  const views = video.viewCount ? formatViewCount(Number(video.viewCount)) : "";

  const containerClass = isGrid ? cls.item__grid : cls.item__list;
  const thumbClass = isGrid ? cls.thumb__grid : cls.thumb__list;
  const titleClass = isGrid ? cls.title__grid : cls.title__list;
  const channelClass = isGrid ? cls.channel__grid : cls.channel__list;
  const viewsClass = isGrid ? cls.views__grid : cls.views__list;
  const descClass = isGrid ? "" : cls.desc__list;

  const thumbSrc = video.thumbnailUrl
    ? video.thumbnailUrl
    : isGrid && currentWidth
      ? videoMobile
      : videoDesktop;

  return (
    <a
      className={containerClass}
      href={videoLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className={thumbClass} src={thumbSrc} alt={title} />
      <div className={descClass}>
        <h3 className={titleClass} title={title}>
          {title}
        </h3>
        <div>
          <p className={channelClass} title={channel}>
            {channel}
          </p>
          <p className={viewsClass}>{views}</p>
        </div>
      </div>
    </a>
  );
};

export default ResultItem;
