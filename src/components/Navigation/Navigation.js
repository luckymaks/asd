import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { changeUser } from "../../redux/auth-actions";
import style from "./Navigation.module.css";

function Navigation() {
  const dispatch = useDispatch();

  function handleButtonClick() {
    dispatch(changeUser(null));
  }

  return (
    <div className={style.sidebar}>
      <button onClick={handleButtonClick} className={style.button}>
        Logout
      </button>
      <nav className={style.nav}>
        <ul className={style.list}>
          <li>
            <NavLink to="#" style={{ textDecoration: "none" }}>
              <h2 className={style.logo}>V</h2>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <div className={style.dashboard}></div>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <div className={style.naomi}></div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/wines">
              <div className={style.wines}></div>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <div className={style.customers}></div>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <div className={style.coming_soon}></div>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <div className={style.settings}></div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
