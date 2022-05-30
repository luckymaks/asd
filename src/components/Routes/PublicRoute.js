import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getIsLogined } from "../../redux/auth-selectors";

function PublicRoute() {
  const isLogined = useSelector(getIsLogined);

  return isLogined ? <Navigate to="/wines" /> : <Outlet />;
}

export default PublicRoute;
