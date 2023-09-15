import { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({create}) => {
    const [post, setPost] = useState({ title: "", description: "" });

    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {
          id: Date.now(),
          ...post,
        };
        
        create(newPost);
        setPost({ title: "", description: "" });
      };

    return (
        <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Post title"
        />
        <MyInput
          value={post.description}
          onChange={(e) => setPost({ ...post, description: e.target.value })}
          type="text"
          placeholder="Post description"
        />
        <MyButton onClick={addNewPost}>Add post</MyButton>
      </form>
    )
}

export default PostForm