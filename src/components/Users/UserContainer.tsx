import { Dispatch } from "redux";
import { AppRootStateType } from "../store/reduxStore/storeRedux";
import { UserItem } from "./Users";

import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../store/reducers/usersReducer";
import { Users } from "./UserC";


type mapStateToPropsType = {
    users: UserItem[]
    pageSize: number
    totalUsersCount: number
}
type mapDispatchToPropsType = {
    follow: (useId: number) => void
    unfollow: (useId: number) => void
    setUsers: (users: UserItem[]) => void
}
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount
    }
}



const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: number) => dispatch(followAC(userID)),
        unfollow: (userID: number) => dispatch(unfollowAC(userID)),
        setUsers: (users: UserItem[]) => dispatch(setUsersAC(users))
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
