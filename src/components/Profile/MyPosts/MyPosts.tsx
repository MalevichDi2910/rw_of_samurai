import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {AddNewPostForm} from "./AddNewPostForm";

export type PostType = {
  id: number,
  message: string,
  like: number
}

type MyPostsPropsType = {
  posts: Array<PostType>
  addPost: (newPostText: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {
  let postsElements = props.posts.map( p => <Post message={p.message} like={p.like} />);
  const newPostElement = React.createRef<HTMLTextAreaElement>();

  const onAddPost = (values: any) => props.addPost(values.newPostText);

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostForm onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
