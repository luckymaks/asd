import style from "./WinesListItem.module.css";
import photo from "../../images/wine_photo.png";

function WinesListItem({ wine }) {
  return (
    <li className={style.item}>
      <div className={style.div}>
        <img
          alt="wine"
          src={wine.photo ? wine.photo : photo}
          className={style.img}
        />
      </div>
      <p className={style.text} style={{ width: "371px" }}>
        {wine.name}
      </p>
      <p className={style.text} style={{ width: "234px" }}>
        {wine.country}
      </p>
      <p className={style.text} style={{ width: "234px" }}>
        {wine.region}
      </p>
      <p className={style.text} style={{ width: "234px" }}>
        {wine.grape}
      </p>
      <p className={style.text} style={{ width: "177px" }}>
        {wine.type}
      </p>
      <p className={style.text} style={{ width: "177px" }}>
        {`€${wine.price}`}
      </p>
    </li>
  );
}

export default WinesListItem;
