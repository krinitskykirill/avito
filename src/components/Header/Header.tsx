import s from './Header.module.scss'

function Header() {
    return (
        <header className={s.header}>
            <a href="" className={s.logo}><img/></a>
            <nav className={s.navigation}>
                <a href="" className={s.navlink}>Поиск</a>
                <a href="" className={s.navlink}>Случайный фильм!</a>
            </nav>
            <a href="" className={s.navlink}>Выйти</a>
        </header>
    )
}

export default Header