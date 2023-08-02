import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { AppRootStateType, StoreType } from "../store/reduxStore/storeRedux";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../store/reducers/profileReducer';
import { withRouter } from './WithRouterHOC';


type contacts = {
    github: string;
    vk: string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
}

type photos = {
    small: string | null
    large: string | null
}

export type ProfileResponseType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: contacts
    photos: photos
}

type ProfilePropsType = {
    setUserProfile: (profile: ProfileResponseType) => void
    profile: ProfileResponseType | null
    match: {
        params: {
            userId:number
        }
    }
}

class ProfileContainer extends React.Component<ProfilePropsType> {

   
    
    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if(!userId) userId = 2
        axios.get<ProfileResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((res) => {
                this.props.setUserProfile(res.data)
                console.log(this.props);

            })
    }

    render(): React.ReactNode {
        return <Profile profile={this.props.profile} />
    }

}
type mapStateToPropsType = {
    profile: ProfileResponseType | null
}
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}


export const ProfileC = connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));