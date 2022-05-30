import { Route, Routes } from "react-router-dom";
import ForgottenPassword from "../ForgottenPassword/ForgottenPassword";
import Login from "../Login/Login";
import ModalAuth from "../ModalAuth/ModalAuth";
import SignUp from "../SignUp/SignUp";

function Auth() {
  return (
    <Routes>
      <Route path="/*" element={<ModalAuth />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forpass" element={<ForgottenPassword />} />
      </Route>
    </Routes>
  );
}

export default Auth;
