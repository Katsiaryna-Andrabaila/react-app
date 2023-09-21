import { useNavigate } from "react-router-dom";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  const navigate = useNavigate();

  return (
    <div className="post">
        <div className="post__content">
          <strong>{props.id}. {props.title}</strong>
          <p>{props.body}</p>
        </div>
        <div className="post__btns">
          <MyButton onClick={() => navigate(`/posts/${props.id}`)}>Open post</MyButton>
          <MyButton onClick={() => props.remove(props)}>Delete post</MyButton>
        </div>
      </div>
  );
}

export default PostItem;