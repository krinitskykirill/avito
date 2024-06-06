import SearchBar from '@components/SearchBar/SearchBar.tsx'
import SearchResult from '@components/SearchResult/SearchResult.tsx'

import cls from './Search.module.scss'

const Search = () => {
    //TODO стилизовать каретку у input
    return (
        <div className={cls.search}>
            <SearchBar/>
            <SearchResult/>
        </div>
    )
}

export default Search