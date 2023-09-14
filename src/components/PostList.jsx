
import PostItem from "./PostItem";

const PostList = ({posts}) => {
    return (
        <>
        <h1 style={{ textAlign: "center" }}>Post list</h1>
        {posts.map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </>
    );
  }
  
  export default PostList;