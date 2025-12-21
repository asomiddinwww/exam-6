import { Outlet, useNavigate } from "react-router-dom";

const MainLayout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
