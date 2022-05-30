import { useState } from "react";

import style from "./ForgottenPassword.module.css";

function ForgottenPassword() {
  const [email, setEmail] = useState("");

  function handleInputChange(event) {
    setEmail(event.currentTarget.value);
  }

  return (
    <form className={style.form}>
      <input
        placeholder="Email Address"
        name="Email"
        type="email"
        value={email}
        onChange={handleInputChange}
        className={style.input}
      />
      <button type="submit" className={style.button}>
        Reset Password
      </button>
    </form>
  );
}

export default ForgottenPassword;
