import { Dispatch } from "redux";
import { AppRootStateType } from "../store/reduxStore/storeRedux";
import { Users } from "./Users";
import { UserType, followAC, setUsersAC, unfollowAC } from "../store/reducers/UsersReducer";
import { connect } from "react-redux";


type mapStateToPropsType = {
    users: UserType[]
}
type mapDispatchToPropsType = {
    follow: (useId: number) => void
    unfollow: (useId: number) => void
    setUsers: (users: UserType[]) => void
}
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}



const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: number) => dispatch(followAC(userID)),
        unfollow: (userID: number) => dispatch(unfollowAC(userID)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users))
    }
}













export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)