import cls from './SearchResult.module.scss'
import {useState} from 'react'
import ResultBar from '../ResultBar/ResultBar.tsx'
import ResultList from '../ResultList/ResultList.tsx'

const SearchResult = () => {

    const [isGrid, setIsGrid] = useState<boolean>(true)

    const setList = () => {
        if (!isGrid) return
        setIsGrid(false)
    }
    const setGrid = () => {
        if (isGrid) return
        setIsGrid(true)
    }

    return (
        <div className={cls.search__result}>
            <ResultBar setList={setList} setGrid={setGrid} isGrid={isGrid}/>
            <ResultList isGrid={isGrid}/>
        </div>
    )
}

export default SearchResult