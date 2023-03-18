import React from "react";
import Header from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getAuthUserData, logoutTC} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component<ownPropsType> {
    componentDidMount() {
       this.props.getAuthUserData()
    }

    render() {
        return <Header login={this.props.login}
                       isAuth={this.props.isAuth}
                       logoutTC={this.props.logoutTC}
        />
    }
}

export type ownPropsType = MapStateToPropsType & mapDispatchToProps

type mapDispatchToProps = {
    getAuthUserData: () => void
    logoutTC:() => void
}

export type MapStateToPropsType = {
    isAuth: boolean
    login: null | string
}

function mapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {getAuthUserData, logoutTC})(HeaderContainer);