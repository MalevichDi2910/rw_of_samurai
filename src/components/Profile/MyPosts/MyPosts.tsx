import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {useForm} from "react-hook-form";

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

type MyPostsFormProps = {
  onSubmit: (values: any) => void
}

const AddNewPostForm = (props: MyPostsFormProps) => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm();

  return (
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <div>
            <textarea
                {...register("newPostText", {})}
                placeholder={'Enter your message'}
            />
        </div>
        <div>
          <input type="submit" value={'Add post'}/>
        </div>
      </form>
  )
}

export default MyPosts;
