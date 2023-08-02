import { Dispatch } from "redux";
import { AppRootStateType } from "../store/reduxStore/storeRedux";
import { UserItem } from "./Users";
import { connect } from "react-redux";
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
} from "../store/reducers/usersReducer";
import { UsersAPIComponen } from "./UsersAPIComponent";


type mapStateToPropsType = {
    users: UserItem[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
// type mapDispatchToPropsType = {
//     follow: (useId: number) => void
//     unfollow: (useId: number) => void
//     setUsers: (users: UserItem[]) => void
//     setCurrentPage: (currentPage: number) => void
//     setTotalUsersCount: (totalUsersCount: number) => void
//     setIsFetching: (isFetching: boolean) => void
// }
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}


 


export const UsersContainer = connect(mapStateToProps,{follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,setIsFetching,})(UsersAPIComponen)
