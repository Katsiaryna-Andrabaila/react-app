const PostItem = (props) => {
  return (
    <div className="post">
        <div className="post__content">
          <strong>{props.number}. {props.title}</strong>
          <p>{props.description}</p>
        </div>
        <div className="post__btns">
          <button>Delete post</button>
        </div>
      </div>
  );
}

export default PostItem;