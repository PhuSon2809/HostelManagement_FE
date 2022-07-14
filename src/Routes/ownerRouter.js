import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

function OwnerRouter({ path, component: Component, exact, roles }) {
  // const isAuth = true

  const isAuth = useSelector((state) => state.login.infoUser);
  const isUser = useSelector((state) => state.login.infoUser.roleId);

  return isAuth && isUser === 3 ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
}

export default OwnerRouter;
