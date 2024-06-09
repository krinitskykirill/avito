import React, {useState} from 'react'
import Input from '@components/Input/Input.tsx'
import Button from '@components/Button/Button.tsx'
import cls from './SearchBar.module.scss'
import {fetchVideos} from '@/redux/videoSlice.ts'
import {RootState, useAppDispatch} from '@/redux/store.ts'
import {useSelector} from 'react-redux'

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState('')
    const dispatch = useAppDispatch()
    const {status} = useSelector((state: RootState) => state.video)

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const handleSearch = () => {
        dispatch(fetchVideos({query}))
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    const containerClass = status === ('succeeded' || 'loading') ?
        cls.search__bar__succeeded :
        cls.search__bar__idle

    const inputClass = status === ('succeeded' || 'loading') ?
        cls.input__succeeded :
        cls.input__idle

    return (
        <div className={containerClass}>
            <h1 className={cls.title}>Поиск видео</h1>
            <div>
                <Input
                    className={inputClass}
                    placeholder="Что хотите посмотреть?"
                    value={query}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                />
                <Button
                    className={cls.button}
                    isAccept={true}
                    onClick={handleSearch}
                >
                    Найти
                </Button>
            </div>
        </div>
    )
}

export default SearchBar
