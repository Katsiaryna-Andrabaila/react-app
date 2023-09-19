import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  return (
    <div className="post">
        <div className="post__content">
          <strong>{props.number}. {props.title}</strong>
          <p>{props.body}</p>
        </div>
        <div className="post__btns">
          <MyButton onClick={() => props.remove(props)}>Delete post</MyButton>
        </div>
      </div>
  );
}

export default PostItem;