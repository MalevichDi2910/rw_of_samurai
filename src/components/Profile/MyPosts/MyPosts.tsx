import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../../redux/store";

type MyPostsPropsType = {
  posts: Array<PostType>
  newPostText: string
  updateNewPostText: (text: any)=>void
  addPost: () => void
}

const MyPosts = (props: MyPostsPropsType) => {
  let postsElements = props.posts.map( p => <Post message={p.message} like={p.like} />);
  const newPostElement = React.createRef<HTMLTextAreaElement>();

  const onAddPost = () => props.addPost();
  const onPostChange = () => props.updateNewPostText(newPostElement.current?.value)

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
