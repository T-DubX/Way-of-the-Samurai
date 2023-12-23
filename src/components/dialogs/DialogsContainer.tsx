import {Dialogs, DialogsPageType} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";
import {ActionType} from "../../redux/dialogs-reducer";
import React from "react";
import {ProfileContainer} from "../profile/ProfileContainer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToProps = {
    dialogsPage: DialogsPageType,
    isAuth: boolean
}

type MapDispatchToProps = {
    dispatch: Dispatch<ActionType>
}

export type DialogsPropsType = MapDispatchToProps & MapStateToProps

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        dispatch: dispatch
    }
}

const AuthRedirectComponents = (props: DialogsPropsType) => {
    return <Dialogs {...props}/>
}
export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponents))

