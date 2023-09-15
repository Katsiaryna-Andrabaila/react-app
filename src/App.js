import { useState } from "react";
import Counter from "./components/Counter";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

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

  const [post, setPost] = useState({ title: "", description: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      ...post,
    };
    setPosts([...posts, newPost]);
    setPost({ title: "", description: "" });
  };

  return (
    <div className="App">
      <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Post title"
        />
        <MyInput
          value={post.description}
          onChange={(e) => setPost({ ...post, description: e.target.value })}
          type="text"
          placeholder="Post description"
        />
        <MyButton onClick={addNewPost}>Add post</MyButton>
      </form>
      <PostList posts={posts} />
      <Counter />
    </div>
  );
}

export default App;
