import cls from './ResultList.module.scss'
import ResultItem from '@components/ResultItem/ResultItem.tsx'
import React from 'react'

type ResultListProps = {
    switcher: boolean;
};

const ResultList: React.FC<ResultListProps> = ({switcher}) => {
    const renderItems = (count: number) => {
        return Array.from({length: count}).map((_, index) => (
            <ResultItem key={index} switcher={switcher}/>
        ))
    }

    return (
        <div
            className={`${cls.result__list} ${switcher ? cls.grid : cls.list}`}>
            {renderItems(12)}
        </div>
    )
}

export default ResultList
