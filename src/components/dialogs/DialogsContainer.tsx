import {Dialogs, DialogsPageType} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";
import {ActionType} from "../../redux/dialogs-reducer";

type MapStateToProps = {
    dialogsPage: DialogsPageType
}

type MapDispatchToProps = {
    dispatch: Dispatch<ActionType>
}

export type DialogsPropsType = MapDispatchToProps & MapStateToProps

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        dispatch: dispatch
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

