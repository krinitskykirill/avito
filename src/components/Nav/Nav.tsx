import {NavLink} from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import './Nav.scss';

interface IActive {
    isActive: boolean;
}

const Nav = () => {
    const setActive = ({isActive}: IActive) => {
        return isActive ?
            'nav__link current' :
            'nav__link';
    };
    return (
        <>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <NavLink to="/" className={'nav__link'}>
                            <img src={logo} className={'logo'} alt="logo"/>
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
        </>
    );
};

export default Nav;
