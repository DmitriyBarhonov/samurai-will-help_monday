import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {StoreType} from "../store/reduxStore/storeRedux";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import { ProfileResponseType } from './ProfileContainer';



type ProfileProps = {
    profile: ProfileResponseType | null
}




const Profile = (props: ProfileProps) => {

    return <div>
        <ProfileInfo profile= {props.profile}/>
        <MyPostsContainer  />
    </div>

};

export default Profile;
