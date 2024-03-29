import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import { StoreType } from './components/store/reduxStore/storeRedux';
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { UsersContainer } from "./components/Users/UserContainer";
import { ProfileC } from './components/Profile/ProfileContainer';



type AppPropsType = {
    store: StoreType
}


function App(props: AppPropsType) {
    // debugger
    return (
        <div className="app-wrapper">
            <Header />
            <Nav />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={'/dialogs'} element={<DialogsContainer />} />
                    <Route path="/profile/:userId" element={<ProfileC/>}/>
                    <Route path="/profile" element={<ProfileC/>}/>
                    {/* <Route path={`/profile/:userId`} element={<ProfileC />} /> */}
                    <Route path={'/users'} element={<UsersContainer />} />
                </Routes>
            </div>
        </div>
    );
}


export default App;
