import React from 'react'
import cls from './ResultBar.module.scss'

import listIcon from '@assets/img/list.svg'
import gridIcon from '@assets/img/grid.svg'

type ResultBarProps = {
    setList: () => void;
    setGrid: () => void;
    switcher: boolean;
};

const ResultBar: React.FC<ResultBarProps> = ({setList, setGrid, switcher}) => {
    const request = 'чем кормить кота'
    const count = 7230

    return (
        <div className={cls.result__bar}>
            <div>
                <h2 className={cls.title}>
                    Видео по запросу <span
                    className={cls.request}>«{request}» </span>
                    <span className={cls.count}>{count}</span>
                </h2>
            </div>
            <div className={cls.switchers}>
                <button className={cls.switcher} onClick={setList}>
                    <img
                        className={`${cls.icon} ${!switcher ?
                            cls.current :
                            ''}`}
                        src={listIcon}
                        alt="Список"
                    />
                </button>
                <button className={cls.switcher} onClick={setGrid}>
                    <img
                        className={`${cls.icon} ${switcher ? cls.current : ''}`}
                        src={gridIcon}
                        alt="Сетка"
                    />
                </button>
            </div>
        </div>
    )
}

export default ResultBar
