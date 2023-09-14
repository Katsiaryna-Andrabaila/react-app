import { useState } from "react";
import Counter from "./components/Counter";
import "./styles/App.css";
import PostList from "./components/PostList";

function App() {
  const [value, setValue] = useState("text");
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

  return (
    <div className="App">
      <PostList posts={posts} />
      <Counter />
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}

export default App;
