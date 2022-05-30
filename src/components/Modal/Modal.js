import { createPortal } from "react-dom";
import { useCallback, useEffect, useState } from "react";
import style from "./Modal.module.css";
import { v4 as uuidv4 } from "uuid";
import { addWine, getWines } from "../../api/api";
import { useDispatch } from "react-redux";
import { setWines } from "../../redux/wines-actions";

const modalRoot = document.getElementById("modal-root");

function Modal({ changeModalStatus }) {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [grape, setGrape] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("1");
  const handleKeydown = useCallback(
    (event) => {
      if (event.code === "Escape") {
        changeModalStatus();
      }
    },
    [changeModalStatus]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [handleKeydown]);

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      changeModalStatus();
    }
  }

  function handleInputChange(event) {
    const target = event.currentTarget;

    if (target.name === "photo") {
      setPhoto(URL.createObjectURL(target.files[0]));
    }

    if (target.name === "name") {
      setName(target.value);
    }

    if (target.name === "country") {
      setCountry(target.value);
    }

    if (target.name === "region") {
      setRegion(target.value);
    }

    if (target.name === "grape") {
      setGrape(target.value);
    }

    if (target.name === "type") {
      setType(target.value);
    }

    if (target.name === "price") {
      setPrice(target.value);
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    addWine({
      photo,
      name,
      country,
      region,
      grape,
      type,
      price,
      id: uuidv4(),
    });
    dispatch(setWines(getWines()));

    setName("");
    setCountry("");
    setRegion("");
    setGrape("");
    setType("");
    setPrice("1");
    changeModalStatus();
  }

  return createPortal(
    <div onClick={handleBackdropClick} className={style.Overlay}>
      <div className={style.Modal}>
        <button onClick={handleBackdropClick} className={style.exit_button}>
          X
        </button>
        <form onSubmit={handleFormSubmit} className={style.form}>
          <label className={style.label}>
            Name
            <input
              name="name"
              type="text"
              value={name}
              required
              onChange={handleInputChange}
              className={style.input}
            />
          </label>
          <label className={style.label}>
            Country
            <input
              name="country"
              type="text"
              value={country}
              required
              onChange={handleInputChange}
              className={style.input}
            />
          </label>
          <label className={style.label}>
            Region
            <input
              name="region"
              type="text"
              value={region}
              required
              onChange={handleInputChange}
              className={style.input}
            />
          </label>
          <label className={style.label}>
            Grape
            <input
              name="grape"
              type="text"
              value={grape}
              required
              onChange={handleInputChange}
              className={style.input}
            />
          </label>
          <label className={style.label}>
            Type
            <input
              name="type"
              type="text"
              value={type}
              required
              onChange={handleInputChange}
              className={style.input}
            />
          </label>
          <label className={style.label}>
            Price
            <input
              name="price"
              type="number"
              value={price}
              required
              onChange={handleInputChange}
              className={style.input}
            />
          </label>
          <label className={style.label} style={{ cursor: "pointer" }}>
            Click to add photo
            <input
              name="photo"
              type="file"
              style={{ display: "none" }}
              onChange={handleInputChange}
              className={style.input}
              accept="image/png"
            />
          </label>
          {photo && <img alt="wine" src={photo} className={style.img} />}
          <button type="submit" className={style.button}>
            Submit
          </button>
        </form>
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
