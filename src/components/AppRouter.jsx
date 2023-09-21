import { Route, Routes, Navigate } from "react-router-dom";
import "../styles/App.css";
import { routes } from "../router";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((el) => (
        <Route path={el.path} element={el.component} key={el.path} />
      ))}
      <Route path="/*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default AppRouter;
