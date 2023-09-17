
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = ({posts, remove, title}) => {
  if (!posts.length) {
    return (
      <h1 style={{ textAlign: "center" }}>Posts not found!</h1>
    )
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, i) => (
          <CSSTransition key={post.id} timeout={500} classNames='post'>
            <PostItem remove={remove} number={i + 1} {...post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
  }
  
  export default PostList;