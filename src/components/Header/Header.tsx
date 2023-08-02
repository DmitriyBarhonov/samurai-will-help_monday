import React from 'react';
import s from "./Header.module.css";
import { NavLink } from 'react-router-dom';

type PropsType = {
    isAuth: boolean
    email: string | null
}

const Header = (props: PropsType) => {
    return <header className={s.header}>
        {/* <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"/> */}

            <div>
                {props.isAuth ? props.email : <NavLink to={'/login'}>Login</NavLink> }
                
            </div>
    </header>
};

export default Header;