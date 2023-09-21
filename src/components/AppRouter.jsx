import { Route, Routes, Navigate } from "react-router-dom";
import "../styles/App.css";
import { privateRoutes, publicRoutes } from "../router";
import { useContext } from "react";
import { AuthContext } from "../context";
import MyLoader from "./UI/loader/MyLoader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <MyLoader />;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((el) => (
        <Route path={el.path} element={el.component} key={el.path} />
      ))}
      <Route path="/*" element={<Navigate to="/posts" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((el) => (
        <Route path={el.path} element={el.component} key={el.path} />
      ))}
      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
