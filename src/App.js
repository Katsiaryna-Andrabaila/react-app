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

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} />
      <Counter />
    </div>
  );
}

export default App;
