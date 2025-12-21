import { Header } from "antd/es/layout/layout";
import { Outlet, useNavigate } from "react-router-dom";

const MainLayout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  return (
    <div className="flex w-full">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
