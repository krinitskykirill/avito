import {Outlet} from 'react-router-dom';
import './Layout.scss';
import Nav from '../Nav/Nav.tsx';

const Layout = () => {
    return (
        <>
            <header className="header">
                <div className="header__container">
                    <Nav/>
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    );
};

export default Layout;