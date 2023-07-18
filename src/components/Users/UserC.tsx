import axios from "axios"
import React from "react"



type UsersPropsType = {
    follow: (useId: number) => void
    unfollow: (useId: number) => void
    setUsers: (users: UserItem[]) => void
    users: UserItem[]
    pageSize: number
    totalUsersCount: number
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


export class Users extends React.Component<UsersPropsType> {


    componentDidMount() {
        axios.get<UsersResponse>("https://social-network.samuraijs.com/api/1.0/users")
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

        return <>
            {this.props.users.map((u) => {
                return <div key={u.id}>
                    <div>

                        <div>
                            <img width="300px" src={u.photos.small || "https://drevnerus.ru/drevnerus.ru/public_html/wp-content/uploads/2011/12/volhvy-2.jpg"} alt="photoProfile" />
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
                        </div>

                    </div>

                    <div>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </div>
                    </div>
                </div>
            })}
        </>
    }
}
