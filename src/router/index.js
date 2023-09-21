import About from "../pages/About";
import NotFound from "../pages/NotFound";
import PostPage from "../pages/PostPage";
import Posts from "../pages/Posts";

export const routes = [
  { path: "/", component: <About /> },
  { path: "/posts", component: <Posts /> },
  { path: "/posts/:id", component: <PostPage /> },
  { path: "/404", component: <NotFound /> },
];
