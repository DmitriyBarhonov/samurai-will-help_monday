import { DataAuthType } from "../../Header/HeaderContainer";


type ActionsUsersType = ReturnType<typeof setAuthUserData>

type isAuthType = DataAuthType & { isAuth: boolean }

const initialState: isAuthType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
};

export const authReducer = (state: isAuthType = initialState, action: ActionsUsersType): isAuthType => {
    switch (action.type) {

        case "SET-USER-DATA":
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default: return state
    }
}

export const setAuthUserData = (data: DataAuthType) => {
    return {
        type: "SET-USER-DATA",
        data
    } as const
}
