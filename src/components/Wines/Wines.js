import style from "./Wines.module.css";
import svg from "../../images/wine_bottle.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWines } from "../../api/api";
import { changeSearch, setWines, changeSort } from "../../redux/wines-actions";
import { getSort, getSortedWines } from "../../redux/wines-selectors";
import WinesListItem from "../WinesListItem.js/WinesListItem";
import refresh from "../../images/refresh.png";

function Wines({ changeModalStatus }) {
  const sort = useSelector(getSort);
  const dispatch = useDispatch();
  const wines = useSelector(getSortedWines);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(setWines(getWines()));
  }, [dispatch]);

  useEffect(() => {
    dispatch(changeSearch(search));
  }, [dispatch, search]);

  function handleInputChange(event) {
    setSearch(event.currentTarget.value);
  }

  function handleRefreshButtonClick() {
    dispatch(setWines(getWines()));
  }

  function handleSortButtonClick() {
    if (sort === "normal") {
      dispatch(changeSort("from lower"));
    }

    if (sort === "from lower") {
      dispatch(changeSort("from biggest"));
    }

    if (sort === "from biggest") {
      dispatch(changeSort("normal"));
    }
  }

  return (
    <section className={style.section}>
      <h1 className={style.title}>Did somebody say wine?</h1>
      <p className={style.title_text}>
        This is where the wines that your virtual sommelier will recommend are
        kept, kind of like a wine cellar! Manage, add, update and search your
        portfolio here.
      </p>
      <div className={style.div_filter}>
        <label className={style.label}>
          Search
          <input
            name="Search"
            value={search}
            onChange={handleInputChange}
            placeholder="e.g. Australian Wines"
            className={style.input}
          />
        </label>
        <button
          type="button"
          onClick={handleSortButtonClick}
          className={style.button_sort}
        />
        <button
          type="button"
          name="refresh"
          onClick={handleRefreshButtonClick}
          className={style.button_refresh}
        >
          <img alt="refresh" src={refresh} style={{ width: "35px" }}></img>
        </button>
        <button
          type="button"
          name="add"
          onClick={changeModalStatus}
          className={style.button_plus}
        >
          +
        </button>
      </div>
      <ul>
        <li className={style.item}>
          <div style={{ width: "90px" }} className={style.div}>
            <img alt="wine bottle" src={svg} className={style.img} />
          </div>
          <div style={{ width: "371px" }} className={style.div}>
            <p className={style.text}>Wine name</p>
          </div>
          <div style={{ width: "234px" }} className={style.div}>
            <p className={style.text}>Country</p>
          </div>
          <div style={{ width: "234px" }} className={style.div}>
            <p className={style.text}>Region</p>
          </div>
          <div style={{ width: "234px" }} className={style.div}>
            <p className={style.text}>Grape</p>
          </div>
          <div style={{ width: "177px" }} className={style.div}>
            <p className={style.text}>Type</p>
          </div>
          <div style={{ width: "177px" }} className={style.div}>
            <p className={style.text}>Price</p>
          </div>
        </li>
        {wines.length > 0 &&
          wines.map((wine) => <WinesListItem wine={wine} key={wine.id} />)}
      </ul>
    </section>
  );
}

export default Wines;
