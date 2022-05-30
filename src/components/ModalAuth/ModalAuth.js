import { NavLink, Outlet } from "react-router-dom";

import style from "./ModalAuth.module.css";

function ModalAuth() {
  return (
    <section className={style.section}>
      <div className={style.div}>
        <h1 className={style.title}> Log into Vinify</h1>
        <ul className={style.list}>
          <li className={style.item}>
            <NavLink
              to="login"
              className={({ isActive }) =>
                isActive ? style.link_active : style.link
              }
            >
              Login
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink
              to="signup"
              className={({ isActive }) =>
                isActive ? style.link_active : style.link
              }
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
        <Outlet />
        <NavLink to="/forpass" className={style.link_pass}>
          Forgotten Password
        </NavLink>
      </div>
    </section>
  );
}

export default ModalAuth;
