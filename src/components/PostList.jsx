
import PostItem from "./PostItem";

const PostList = ({posts}) => {
    return (
        <>
        <h1 style={{ textAlign: "center" }}>Post list</h1>
        {posts.map((post, i) => (
          <PostItem number={i + 1} key={post.id} {...post} />
        ))}
      </>
    );
  }
  
  export default PostList;