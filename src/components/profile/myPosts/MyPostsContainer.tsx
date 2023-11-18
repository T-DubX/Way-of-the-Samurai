import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {PostsType} from "./posts/Post";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/store";

type MapStateToPropsType = {
    posts: PostsType[]
    newPostText: string
}

type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
            dispatch(updateNewPostTextAC(''))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)