import React from 'react';
import s from './MyPosts.module.css';
import { PostType } from '../../store/state';

import { RootActionType } from '../../../types/actionType';
import { UpdateTextAC, addPostAC } from '../../store/reducers/profileReducer';
import {AppRootStateType, StoreType} from "../../store/reduxStore/storeRedux";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    myPosts: PostType[]
    newText: string
}
 type mapDispatchToPropsType ={
     addPost:(text:string) => void
     updateText: (text:string) => void
 }
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return {
      myPosts: state.profilePage.posts,
      newText: state.profilePage.updateText
  }
}
const mapDispatchToProps = (dispatch : Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (text: string) => {
            dispatch(addPostAC(text))
        },
        updateText: (text: string) => {
            dispatch(UpdateTextAC(text))
        }
    }
}
      

export const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)
