import axios from "axios"
import React from "react"
import {Users} from "./Users";



type UsersPropsType = {
    follow: (useId: number) => void
    unfollow: (useId: number) => void
    setUsers: (users: UserItem[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    users: UserItem[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
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


export class UsersAPIComponen  extends React.Component<UsersPropsType> {


    componentDidMount() {
        axios.get<UsersResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get<UsersResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
            })
    }

    render(): React.ReactNode {

        let pages: Array<number> = []
        const pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        for (let i = 1; i < pageCount; i++) {
            if (pages.length < 10) {
                pages.push(i);
            }
        }

        return <Users users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}
                      onPageChange={this.onPageChange}
                      pages={pages} currentPage={this.props.currentPage}  />

    }
}
