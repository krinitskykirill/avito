import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import cls from "./Layout.module.scss";
import logo from "@assets/img/logo.svg";

interface ActiveProps {
  isActive: boolean;
}

const getActiveClass = ({ isActive }: ActiveProps) =>
  isActive ? cls.link__current : cls.link;

export const Layout: React.FC = () => (
  <>
    <header className={cls.header}>
      <div className={cls.container}>
        <nav>
          <ul className={cls.list}>
            <li>
              <NavLink to="/" className={cls.link__logo}>
                <img src={logo} className={cls.logo} alt="logo" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className={getActiveClass}>
                Поиск
              </NavLink>
            </li>
            <li>
              <NavLink to="/favorites" className={getActiveClass}>
                Избранное
              </NavLink>
            </li>
          </ul>
        </nav>
        <NavLink to="/logout" className={cls.link__logout}>
          Выйти
        </NavLink>
      </div>
    </header>
    <main className={cls.main}>
      <Outlet />
    </main>
  </>
);
