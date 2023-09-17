import { useMemo, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";

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
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    return filter.sort
      ? [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
      : posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((el) =>
      el.title.toLowerCase().includes(filter.query)
    );
  }, [sortedPosts, filter.query]);

  const createPost = (post) => {
    setPosts([...posts, post]);
    setModal(false);
  };

  const removePost = (post) =>
    setPosts(posts.filter((item) => item.id !== post.id));

  return (
    <div className="App">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Post list"
      />
    </div>
  );
}

export default App;
