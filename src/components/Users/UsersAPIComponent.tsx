import axios from "axios"
import React from "react"
import { Users } from "./Users";
import preloader from "./../image/Rocket.gif"
import { Preloader } from "../common/Preploader/Preloader";


type UsersPropsType = {
    follow: (useId: number) => void
    unfollow: (useId: number) => void
    setUsers: (users: UserItem[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    users: UserItem[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type UserItem = {
    name: string;
    id: number;
    photos: {
        small: string | null;
        large: string | null;
    };
    status: string | null;
    followed: boolean;
}

export type UsersResponse = {
    error: null | string
    items: Array<UserItem>
    totalCount: number
}


export class UsersAPIComponen extends React.Component<UsersPropsType> {


    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get<UsersResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setIsFetching(false)
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        axios.get<UsersResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setIsFetching(false)
                this.props.setUsers(res.data.items)
            })
    }

    render(): React.ReactNode {

        let pages: Array<number> = []
        const pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        for (let i = 1; i < pageCount; i++) {
            if (pages.length < 90) {
                pages.push(i);
            }
        }

        return <>
        {this.props.isFetching &&  <Preloader />}
            <Users users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}
                onPageChange={this.onPageChange}
                pages={pages} currentPage={this.props.currentPage} />
        </>

    }
}
