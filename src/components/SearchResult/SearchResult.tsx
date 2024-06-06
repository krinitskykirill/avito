import cls from './SearchResult.module.scss'
import {useState} from 'react'
import ResultBar from '../ResultBar/ResultBar.tsx'
import ResultList from '../ResultList/ResultList.tsx'

const SearchResult = () => {

    const [switcher, setSwitcher] = useState<boolean>(true)

    const setList = () => {
        if (!switcher) return
        setSwitcher(false)
    }
    const setGrid = () => {
        if (switcher) return
        setSwitcher(true)
    }

    return (
        <div className={cls.search__result}>
            <ResultBar setList={setList} setGrid={setGrid} switcher={switcher}/>
            <ResultList switcher={switcher}/>
        </div>
    )
}

export default SearchResult