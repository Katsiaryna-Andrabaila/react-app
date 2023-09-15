import { useState } from "react";
import Counter from "./components/Counter";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Javascript",
      description: "Javascript is a programming language",
    },
    {
      id: 2,
      title: "Python",
      description: "Python is a programming language",
    },
    {
      id: 3,
      title: "C++",
      description: "C++ is a programming language",
    },
  ]);

  const createPost = (post) => {
    setPosts([...posts, post]);
  };

  const removePost = (post) =>
    setPosts(posts.filter((item) => item.id !== post.id));

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length ? (
        <PostList remove={removePost} posts={posts} />
      ) : (
        <h1 style={{ textAlign: "center" }}>Posts not found!</h1>
      )}
      <Counter />
    </div>
  );
}

export default App;
