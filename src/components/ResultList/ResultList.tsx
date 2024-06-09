import cls from './ResultList.module.scss'
import ResultItem from '@components/ResultItem/ResultItem.tsx'
import React, {ReactNode} from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '@/redux/store.ts'

type ResultListProps = {
    isGrid: boolean;
};

const ResultList: React.FC<ResultListProps> = ({isGrid}) => {

    const {videos, status} = useSelector((state: RootState) => state.video)

    return (
        <div
            className={`${cls.result__list} ${isGrid ? cls.grid : cls.list}`}>
            {
                status === 'succeeded' ? (
                    videos.map((video): ReactNode => (
                        <ResultItem key={video.id} video={video}
                                    isGrid={isGrid}/>
                    ))
                ) : status === 'loading' ? (
                    <div>Loading...</div>
                ) : status === 'failed' ? (
                    <div>Error loading videos</div>
                ) : null
            }
        </div>
    )
}

export default ResultList
