import { useMemo, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MeSelect";
import MyInput from "./components/UI/input/MyInput";

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
  const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = useMemo(() => {
    return selectedSort
      ? [...posts].sort((a, b) =>
          a[selectedSort].localeCompare(b[selectedSort])
        )
      : posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((el) =>
      el.title.toLowerCase().includes(searchQuery)
    );
  }, [sortedPosts, searchQuery]);

  const createPost = (post) => {
    setPosts([...posts, post]);
  };

  const removePost = (post) =>
    setPosts(posts.filter((item) => item.id !== post.id));

  const sortPosts = (value) => {
    setSelectedSort(value);
    setPosts(sortedPosts);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <>
        <MyInput
          type="text"
          placeholder="Seacrh..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
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
      {sortedAndSearchedPosts.length ? (
        <PostList remove={removePost} posts={sortedAndSearchedPosts} />
      ) : (
        <h1 style={{ textAlign: "center" }}>Posts not found!</h1>
      )}
    </div>
  );
}

export default App;
