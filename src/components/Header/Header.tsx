import './Header.scss';
import NavMenu from '../NavMenu/NavMenu.tsx';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <NavMenu/>
            </div>
        </header>
    );
};

export default Header;