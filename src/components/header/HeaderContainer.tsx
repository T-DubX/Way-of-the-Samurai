import React, {ReactNode} from 'react';
import {connect} from "react-redux";
import axios from "axios";
import {AppStateType} from "../../redux/store";
import {setAuthUserData} from "../../redux/auth-reducer";
import {Header} from "./Header";

type HeaderAPIContainerProps = {
    setAuthUserData: (userId: number, email: string, login: string) => void
}

class HeaderAPIContainer extends React.Component<HeaderAPIContainerProps> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(res => {
                console.log(res)
                if (res.data.resultCode === 0) {
                    const {id, login, email} = res.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
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

export const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderAPIContainer)
