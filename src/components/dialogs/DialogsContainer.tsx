import {Dialogs, DialogsPageType} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {AnyAction, Dispatch} from "redux";

type MapStateToProps = {
    dialogsPage: DialogsPageType
}

type MapDispatchToProps = {
    dispatch: Dispatch<AnyAction>
}

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

