import { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import { initialPosts } from "./consts/initialPosts";

function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

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
