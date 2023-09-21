import About from "../pages/About";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import PostPage from "../pages/PostPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
  { path: "/", component: <About /> },
  { path: "/posts", component: <Posts /> },
  { path: "/posts/:id", component: <PostPage /> },
  { path: "/404", component: <NotFound /> },
];

export const publicRoutes = [
  { path: "/login", component: <Login /> },
  { path: "/404", component: <NotFound /> },
];
