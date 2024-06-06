import React from 'react'

import Input from '@components/Input/Input.tsx'
import Button from '@components/Button/Button.tsx'
import cls from './SearchBar.module.scss'

const SearchBar: React.FC = () => {
    return (
        <div className={cls.search__bar}>
            <h1 className={cls.title}>Поиск видео</h1>
            <div>
                <Input
                    className={cls.input}
                    placeholder="Что хотите посмотреть?"
                />
                <Button
                    className={cls.button}
                    isAccept={true}
                >
                    Найти
                </Button>
            </div>
        </div>
    )
}

export default SearchBar
