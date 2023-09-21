import { useParams } from "react-router-dom";
import { useFetcher } from "../hooks/useFetcher";
import PostService from "../API/PostService";
import { useEffect, useState } from "react";
import MyLoader from "../components/UI/loader/MyLoader";

const PostPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPost, isLoading] = useFetcher(async () => {
    const responce = await PostService.getPostById(params.id);
    setPost(responce.data);
  });
  const [fetchComments, isCommentsLoading] = useFetcher(async () => {
    const responce = await PostService.getCommentsById(params.id);
    setComments(responce.data);
  });

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, []);

  return (
    <div style={{ width: "90%" }}>
      {isLoading ? (
        <MyLoader />
      ) : (
        <h1>
          {post.id}. {post.title}
        </h1>
      )}
      <h2>Comments</h2>
      {isCommentsLoading ? (
        <MyLoader />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {comments.map((el) => (
            <div key={el.id}>
              <h5>{el.email}</h5>
              <div>{el.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostPage;
