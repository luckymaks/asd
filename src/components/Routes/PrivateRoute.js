import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getIsLogined } from "../../redux/auth-selectors";

function PrivateRoute() {
  const isLogined = useSelector(getIsLogined);

  return isLogined ? <Outlet /> : <Navigate to="/auth/login" />;
}

export default PrivateRoute;
