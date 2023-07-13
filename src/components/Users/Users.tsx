import axios from "axios"



type UsersPropsType = {
    follow: (useId: number) => void
    unfollow: (useId: number) => void
    setUsers: (users: UserItem[]) => void
    users: UserItem[]
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

 
export const Usersc = (props: UsersPropsType) => {

    if(props.users.length === 0){
        axios.get<UsersResponse>("https://social-network.samuraijs.com/api/1.0/users")
            .then((res) => {
                props.setUsers(res.data.items)
            })
    }
 

    return <>
      
        {props.users.map((u) => {
            return <div key={u.id}>
                <div>

                    <div>
                        <img width="300px" src={ u.photos.small ||"https://drevnerus.ru/drevnerus.ru/public_html/wp-content/uploads/2011/12/volhvy-2.jpg"} alt="photoProfile" />
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>}
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
