import {addPostAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {PostsType} from "./posts/Post";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/store";

type MapStateToPropsType = {
   posts: PostsType[]
}

type MapDispatchToPropsType = {
   addPost: (newPostText: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
   return {
      posts: state.profilePage.posts,
   }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
   return {
      addPost: (newPostText: string) => {
         dispatch(addPostAC(newPostText))
      }
   }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)