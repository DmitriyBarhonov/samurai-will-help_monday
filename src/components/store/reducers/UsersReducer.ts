import { UserItem } from "../../Users/Users";


type InitialStateType = {
    users: UserItem[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
};


type ActionsUsersType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>



const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 110,
    currentPage: 2,
    isFetching: false
}


export const usersReducer = (state: any = initialState, action: ActionsUsersType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map((u:UserItem ) => u.id === action.userID ? { ...u, followed: true } : u)
            }

        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map((u:any) => u.id === action.userID ? { ...u, followed: false } : u)
            }

        case "SET-USERS":
            return { ...state, users: [...action.users] }

        case "SET-CURRENT-PAGE":
            return { ...state, currentPage: action.currentPage }

        case "SET-USER-TOTAL-COUNT":
            return { ...state, totalUsersCount: action.totalUsersCount }

        default: return state
    }
}

export const followAC = (userID: number) => {
    return {
        type: "FOLLOW",
        userID
    } as const
}


export const unfollowAC = (userID: number) => {
    return {
        type: "UNFOLLOW",
        userID
    } as const
}

export const setUsersAC = (users: UserItem[]) => {
    return {
        type: "SET-USERS",
        users
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    } as const
}
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: "SET-USER-TOTAL-COUNT",
        totalUsersCount
    } as const
}
