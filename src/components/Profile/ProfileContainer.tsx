import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {ProfileType} from "./ProfileInfo/ProfileInfo";


class ProfileContainer extends React.Component<OwnPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
                <Profile  profile={this.props.profile} />
        );
    }
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type MapStateToPropsType = {
    profile: ProfileType
}

export type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile!
})


export default connect (mapStateToProps, {setUserProfile}) (ProfileContainer);

