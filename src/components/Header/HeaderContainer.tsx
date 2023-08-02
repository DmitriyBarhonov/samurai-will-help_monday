import React from 'react';
import s from "./Header.module.css";
import { NavLink } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';
import { AppRootStateType } from '../store/reduxStore/storeRedux';
import { connect } from 'react-redux';
import { setAuthUserData } from '../store/reducers/authReducer';


export type DataAuthType = {
    id: number | null
    email: string | null
    login: string | null
   
}

type AuthResponseType = {
    data: DataAuthType
    messages: any[]
    fieldsErrors: any[]
    resultCode: number
}

type HeaderContainerType = {
    setAuthUserData: (data: DataAuthType) => void
    isAuth: boolean
    email: string | null
}

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount(): void {
        axios.get<AuthResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
            .then((res) => {
                if (res.data.resultCode === 0) {
                    this.props.setAuthUserData(res.data.data)
                }
            })
    }

    render(): React.ReactNode {
        return <Header email={this.props.email} isAuth={this.props.isAuth} />
    }
};

type mapStateToPropsType = {
    isAuth: boolean
    email: string | null
}
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        email: state.auth.email
    }
}

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);