import React, {Component, ComponentType} from "react";
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {ProfileType} from "./ProfileInfo/ProfileInfo";
import {useParams} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import { createBrowserHistory } from "history";


export interface WithRouterProps {
    params: Record<string, number>;
}

export const withRouter = <Props extends WithRouterProps>(
    Component: React.ComponentType<Props>
) => {
    return (props: Omit<Props, keyof WithRouterProps>) => {

        const params = useParams();

        return (
            <Component
                {...(props as Props)}
                params={params}
            />
        );
    };
};

const history = createBrowserHistory();

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {

        let userId: number | null = this.props.params.userId;
        if (!userId){
            userId = this.props.authorizedUserId;
            if(!userId){
               history.push('/login');
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);

    }

    render() {
        return (
            <Profile profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        );
    }
}

export type MapDispatchToPropsType = {
    getUserProfile: (userId: number | null) => void
    getStatus: (userId: number | null) => void
    updateStatus: (status: string) => void
}

type MapStateToPropsType = {
    profile: ProfileType
    status: string
    authorizedUserId: null | number
    isAuth: boolean
}

export type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType;
export type PropsType = WithRouterProps & OwnPropsType;

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile!,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose<ComponentType>(withAuthRedirect,connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),withRouter)(ProfileContainer)










