import { Route, Routes, Navigate } from "react-router-dom";
import "../styles/App.css";
import About from "../pages/About";
import Posts from "../pages/Posts";
import NotFound from "../pages/NotFound";
import PostPage from "../pages/PostPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostPage />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="/*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default AppRouter;
