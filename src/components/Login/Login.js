import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/api";
import { changeUser } from "../../redux/auth-actions";

import style from "./Login.module.css";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  function handleFormSubmit(event) {
    event.preventDefault();
    const data = {
      email,
      password,
    };

    const result = login(data);

    if (result.name) {
      setEmail("");
      setPassword("");
      dispatch(changeUser(result));
      navigate("/wines", { replace: true });
      return;
    }

    setError(result);
  }

  function handleInputChange(event) {
    const target = event.currentTarget;
    if (target.name === "Email") {
      setEmail(target.value);
    }

    if (target.name === "Password") {
      setPassword(target.value);
    }
  }

  return (
    <form onSubmit={handleFormSubmit} className={style.form}>
      <input
        placeholder="Email"
        name="Email"
        type="email"
        value={email}
        onChange={handleInputChange}
        className={style.input}
      />
      <input
        placeholder="Password"
        name="Password"
        type="password"
        value={password}
        onChange={handleInputChange}
        className={style.input}
      />
      <button type="submit" className={style.button}>
        Login
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default Login;
