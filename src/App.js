import { useState } from "react";
import Counter from "./components/Counter";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MeSelect";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Javascript",
      description: "9 Javascript is a programming language",
    },
    {
      id: 2,
      title: "Python",
      description: "5 Python is a programming language",
    },
    {
      id: 3,
      title: "C++",
      description: "8 C++ is a programming language",
    },
  ]);
  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (post) => {
    setPosts([...posts, post]);
  };

  const removePost = (post) =>
    setPosts(posts.filter((item) => item.id !== post.id));

  const sortPosts = (value) => {
    setSelectedSort(value);
    const postsCopy = [...posts];
    setPosts(postsCopy.sort((a, b) => a[value].localeCompare(b[value])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort by"
          options={[
            { value: "title", name: "Title" },
            { value: "description", name: "Description" },
          ]}
        />
      </>
      {posts.length ? (
        <PostList remove={removePost} posts={posts} />
      ) : (
        <h1 style={{ textAlign: "center" }}>Posts not found!</h1>
      )}
    </div>
  );
}

export default App;
