import React, {FC} from 'react';
import s from './MyPosts.module.css'
import {Post, PostsType} from "./posts/Post";

type ProfilePropsType = {
    posts: PostsType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const MyPosts: FC<ProfilePropsType> = (props) => {

    const postsElements: JSX.Element[] = props.posts.map(post => <Post message={post.message}
                                                                       likeCount={post.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
        if (newPostElement.current) {
            props.addPost()
            props.updateNewPostText('')
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
        }
    }

    return (
        <div className={s.wrapperPosts}>
            <h3>My posts</h3>
            <div className={s.newPost}>
                <textarea ref={newPostElement}
                          value={props.newPostText}
                          onChange={onPostChange}
                          placeholder='your news...'
                ></textarea>
                <button className={s.btn}
                        onClick={onAddPost}
                >Add post
                </button>
            </div>
            <div className={s.posts}>
                {
                    postsElements
                }
            </div>

        </div>
    );
};

