import { ProfileResponseType } from "../components/Profile/ProfileContainer"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'
const SET_USER_PROFILE = "SET_USER_PROFILE"

export type RootActionType = AddPostActionType | UpdateTextActionType | UpdateMessageTextActionType | SendMessageTypeActionType | setUserProfileACType

export type AddPostActionType ={
    type: typeof ADD_POST
}


export type UpdateTextActionType ={
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}

export type  UpdateMessageTextActionType ={
    type: typeof UPDATE_NEW_MESSAGE_BODY
    newMessageTextBody: string
}

export type SendMessageTypeActionType = {
    type: typeof  SEND_MESSAGE
}

export type setUserProfileACType = {
    type : typeof SET_USER_PROFILE
    profile: ProfileResponseType
}
