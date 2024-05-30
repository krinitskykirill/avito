import {NavLink, Outlet} from 'react-router-dom'
import './Layout.scss'

import logo from '../../assets/img/logo.svg'

interface IActive {
    isActive: boolean;
}

const Layout = () => {
    const setActive = ({isActive}: IActive) => {
        return isActive ?
            'nav__link current' :
            'nav__link'
    }

    return (
        <>
            <header className="header">
                <div className="header__container">
                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <NavLink to="/" className={'nav__link--logo'}>
                                    <img src={logo} className={'logo'}
                                         alt="logo"/>
                                </NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink to="/"
                                         className={setActive}>
                                    Поиск
                                </NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink to="/favorites"
                                         className={setActive}>
                                    Избранное
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <NavLink to="/logout" className={'nav__link logout'}>
                        Выйти
                    </NavLink>
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout