import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth/Auth";
import Modal from "./components/Modal/Modal";
import Navigation from "./components/Navigation/Navigation";
import PrivateRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import Wines from "./components/Wines/Wines";
import { getIsLogined } from "./redux/auth-selectors";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const isLogined = useSelector(getIsLogined);

  function changeModalStatus() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (isLogined && location.pathname === "/") {
      navigate("/wines", { replace: true });
    }
  }, [isLogined, location.pathname, navigate]);

  useEffect(() => {
    if (!isLogined && location.pathname === "/") {
      navigate("/auth/login", { replace: true });
    }
  }, [isLogined, location.pathname, navigate]);

  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "row" }}>
        {isLogined && <Navigation />}
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route
              path="/wines"
              element={<Wines changeModalStatus={changeModalStatus} />}
            />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="/auth/*" element={<Auth />} />
          </Route>
        </Routes>
      </div>
      {isOpen && <Modal changeModalStatus={changeModalStatus} />}
    </div>
  );
}

export default App;
