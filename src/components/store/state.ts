
export type StateType = {
    profilePage: ProfilePageType,
    messagesPage: MassagePageType
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostType[]
    updateText: string
}

export type MassagePageType = {
    dialogsData: DialogsDateType[]
    messagesData: MessagesDateType[]
    updateMassage: string
}


export type DialogsDateType = {
    id: number
    name: string
}

export type MessagesDateType = {
    id: number
    message: string
}
