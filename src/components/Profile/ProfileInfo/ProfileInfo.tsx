import MyPosts from "../MyPosts/MyPosts";
import React from "react";
import s from "./ProfileInfo.module.css"
import { ProfileResponseType } from "../ProfileContainer";
import { Preloader } from "../../common/Preploader/Preloader";

type ProfileInfoType ={
    profile: ProfileResponseType | null
}

const ProfileInfo = (props: ProfileInfoType) => {
    if(!props.profile) return <Preloader/>
    return <div>
        <div >
            <img style={{width: '50%'}} alt="dw" src={props.profile?.photos.large || ''} />
        </div>
        <div className={s.descriptionBlock}>
            ava+description
        </div>

    </div>

};

export default ProfileInfo;