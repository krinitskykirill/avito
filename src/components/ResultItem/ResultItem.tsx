import React from 'react'
import he from 'he'
import videoDesktop from '@assets/img/video.svg'
import videoMobile from '@assets/img/video-mobile.svg'

import cls from './ResultItem.module.scss'
import useWindowWidth from '@/hooks/useWindowWidth.ts'
import {VideoCard} from '@/redux/videoSlice.ts'
import {
    createVideoLink,
    formatViewCount,
    getMaxLength,
    truncate,
} from '@components/ResultItem/utils.ts'

type ResultItemProps = {
    isGrid: boolean;
    video: VideoCard;
};

const ResultItem: React.FC<ResultItemProps> = ({isGrid, video}) => {
    const currentWidth = useWindowWidth()

    const videoLink = createVideoLink(video.id)

    const title =
        truncate(he.decode(video.title),
            getMaxLength(currentWidth, isGrid))

    const channel = truncate(he.decode(video.channelTitle),
        currentWidth ? 23 : isGrid ? 27 : Infinity)

    const views = video.viewCount ?
        formatViewCount(Number(video.viewCount)) :
        ''

    const containerClass = isGrid ? cls.item__grid : cls.item__list
    const videoClass = isGrid ? cls.video__grid : cls.video__list
    const titleClass = isGrid ? cls.title__grid : cls.title__list
    const channelClass = isGrid ? cls.channel__grid : cls.channel__list
    const viewsClass = isGrid ? cls.views__grid : cls.views__list
    const descClass = isGrid ? '' : cls.list__desc

    const imageSrc = video.thumbnailUrl
        ? video.thumbnailUrl
        : (isGrid && currentWidth ? videoMobile : videoDesktop)

    return (
        <div className={containerClass}>
            <a className={descClass} href={videoLink} target="_blank" rel="noopener noreferrer">
                <img
                    className={videoClass}
                    src={imageSrc}
                    alt={title}
                />
                <div>
                    <h3
                        className={titleClass}
                        title={title}
                    >
                        {title}
                    </h3>
                    <div>
                        <p
                            className={channelClass}
                            title={channel}
                        >
                            {channel}
                        </p>
                        <p className={viewsClass}>
                            {views}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ResultItem
