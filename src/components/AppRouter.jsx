import { Route, Routes, Navigate } from "react-router-dom";
import "../styles/App.css";
import About from "../pages/About";
import Posts from "../pages/Posts";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
    return (
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Posts />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/*" element={<Navigate to="/404" replace />} />
      </Routes>
        
    )
};

export default AppRouter;