import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {getAuthUserData, setAuthUserData} from "../../redux/auth-reducer";
import {Header} from "./Header";

type HeaderAPIContainerProps = {
    setAuthUserData: (userId: number, email: string, login: string) => void
    getAuthUserData: () => void
}

class HeaderAPIContainer extends React.Component<HeaderAPIContainerProps> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export const HeaderContainer = connect(mapStateToProps, {setAuthUserData, getAuthUserData})(HeaderAPIContainer)
