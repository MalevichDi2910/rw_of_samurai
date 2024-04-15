import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {AddNewPostForm} from "./AddNewPostForm";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {ProfileType} from "./../ProfileInfo/ProfileInfo";
import {PostType} from "./../../../redux/profile-reducer";

type MyPostsPropsType = {
  posts: PostType[]
  profile: ProfileType
  addPost: (newPostText: string) => void
}

const MyPosts = ({posts, addPost, profile}: MyPostsPropsType) => {
  let postsElements = [...posts].reverse().map( p => <Post profile={profile} key={p.id} message={p.message} like={p.like} date={p.date}/>);
  const [postsRef] = useAutoAnimate<HTMLDivElement>();

  const onAddPost = (values: any) => addPost(values.newPostText);

  return (
    <div className={s.postsBlock}>
      <AddNewPostForm onSubmit={onAddPost} />
      <div ref={postsRef} className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
