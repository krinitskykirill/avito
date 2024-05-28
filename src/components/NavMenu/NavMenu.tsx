import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import './NavMenu.scss';

const NavMenu: React.FC = () => {
    const getLinkClass = (isActive: boolean, baseClass: string) => isActive ? `${baseClass} current` : baseClass;

    return (
        <>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <NavLink to="/" end className={({ isActive }) => getLinkClass(isActive, 'nav__item logo')}>
                            <img src={logo} width={48} height={48} alt="logo" />
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/search" className={({ isActive }) => getLinkClass(isActive, 'nav__link')}>
                            Поиск
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink to="/favorites" className={({ isActive }) => getLinkClass(isActive, 'nav__link')}>
                            Избранное
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <NavLink to="/logout" className={({ isActive }) => getLinkClass(isActive, 'nav__link logout')}>
                Выйти
            </NavLink>
        </>
    );
};

export default NavMenu;
