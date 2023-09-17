
import PostItem from "./PostItem";

const PostList = ({posts, remove}) => {
  if (!posts.length) {
    return (
      <h1 style={{ textAlign: "center" }}>Posts not found!</h1>
    )
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Post list</h1>
        {posts.map((post, i) => (
          <PostItem remove={remove} number={i + 1} key={post.id} {...post} />
        ))}
    </>
  );
  }
  
  export default PostList;