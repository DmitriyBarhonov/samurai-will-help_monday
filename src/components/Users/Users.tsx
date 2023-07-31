import axios from "axios"
import {inspect} from "util";
import styles from "./usersStyle.module.css"



type UsersPropsType = {
    follow: (useId: number) => void
    unfollow: (useId: number) => void
    users: UserItem[]
    currentPage: number
    onPageChange: (pageNumber: number) =>  void
    pages: Array<number>
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

export const Users = (props: UsersPropsType) => {

    return <>
        {props.pages.map((p) => {
            return <button onClick={() => { props.onPageChange(p) }} className={props.currentPage === p ? styles.selectedPage : ""} key={p}>{p}</button>
        })}
      

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
