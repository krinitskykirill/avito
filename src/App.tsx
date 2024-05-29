import {Suspense, lazy} from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/Layout.tsx';

const Search = lazy(() => import('./pages/Search/Search.tsx'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites.tsx'));
const Login = lazy(() => import('./pages/Login/Login.tsx'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound.tsx'));

const App = () => {
    return (
        <div className="app">
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route index element={<Search/>}/>
                        <Route path={'/favorites'} element={<Favorites/>}/>
                        <Route path={'/login'} element={<Login/>}/>
                        <Route path={'*'} element={<NotFound/>}/>
                    </Route>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;