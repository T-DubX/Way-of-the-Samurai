import {Dialogs, DialogsPageType} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {compose, Dispatch} from "redux";
import {ActionType} from "../../redux/dialogs-reducer";
import React from "react";
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

export default compose<React.ComponentType>(
   withAuthRedirect,
   connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)

