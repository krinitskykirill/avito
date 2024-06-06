import React from 'react'

import video from '@assets/img/video.svg'
import videoMobile from '@assets/img/video-mobile.svg'

import cls from './ResultItem.module.scss'
import useWindowWidth from '@/hooks/useWindowWidth.ts'

type ResultItemProps = {
    switcher: boolean;
};

const truncate = (text: string, maxLength: number): string => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
}

const getMaxLength = (isMobile: boolean, switcher: boolean): number => {
    if (isMobile && switcher) return 77
    if (isMobile) return 39
    if (switcher) return 56
    return Infinity
}

const ResultItem: React.FC<ResultItemProps> = ({switcher}) => {
    const isMobile = useWindowWidth() <= 768

    const title = 'Как кормить кошку натуралкой | Перечень полезных для кошек продуктов и советы по составлению рациона'
    const channel = 'Ветеринария и Кормление собак и кошек'
    const views = '786 тыс. просмотров'

    const truncatedTitle = truncate(title, getMaxLength(isMobile, switcher))
    const truncatedChannel = truncate(channel,
        isMobile ? 23 : switcher ? 27 : Infinity)

    const containerClass = switcher ? cls.item__grid : cls.item__list
    const videoClass = switcher ? cls.video__grid : cls.video__list
    const titleClass = switcher ? cls.title__grid : cls.title__list
    const channelClass = switcher ? cls.channel__grid : cls.channel__list
    const viewsClass = switcher ? cls.views__grid : cls.views__list
    const descClass = switcher ? '' : cls.list__desc

    const imageSrc = switcher && isMobile ? videoMobile : video

    return (
        <div className={containerClass}>
            <img
                className={videoClass}
                src={imageSrc}
                alt={title}
            />
            <div className={descClass}>
                <h3
                    className={titleClass}
                    title={title}
                >
                    {truncatedTitle}
                </h3>
                <div>
                    <p
                        className={channelClass}
                        title={channel}
                    >
                        {truncatedChannel}
                    </p>
                    <p className={viewsClass}>
                        {views}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ResultItem
