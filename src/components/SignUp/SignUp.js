import { useState } from "react";
import { Outlet } from "react-router-dom";
import { signup } from "../../api/api";

import style from "./SignUp.module.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  function handleFormSubmit(event) {
    event.preventDefault();
    const data = {
      name,
      email,
      password,
    };

    const result = signup(data);

    if (result.name) {
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setError("User is created");
      return;
    }

    setError(result);
  }

  function handleInputChange(event) {
    const target = event.currentTarget;

    if (target.name === "Name") {
      setName(target.value);
    }

    if (target.name === "Email") {
      setEmail(target.value);
    }

    if (target.name === "Password") {
      setPassword(target.value);
    }

    if (target.name === "Confirm Password") {
      setConfirmPassword(target.value);
    }
  }

  return (
    <form onSubmit={handleFormSubmit} className={style.form}>
      <input
        placeholder="Name"
        name="Name"
        type="text"
        value={name}
        onChange={handleInputChange}
        className={style.input}
      />
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
      <input
        placeholder="Confirm Password"
        name="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={handleInputChange}
        className={style.input}
      />
      <button type="submit" className={style.button}>
        Create Account
      </button>
      {error && <p>{error}</p>}
      <Outlet />
    </form>
  );
}

export default SignUp;
