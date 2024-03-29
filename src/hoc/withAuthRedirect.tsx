import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/store";
import {ComponentType} from "react";

type MapStatePropsType = {
  isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    isAuth: state.auth.isAuth
  }
}

export function withAuthRedirect<T extends JSX.IntrinsicAttributes>(Component: ComponentType<T>) {
  const RedirectComponent = (props: MapStatePropsType) => {
    let {isAuth, ...restProps} = props

    if (!isAuth) return <Redirect to={'/login'}/>

    return <Component {...restProps as T}/>
  }

  const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
  return ConnectedRedirectComponent
}