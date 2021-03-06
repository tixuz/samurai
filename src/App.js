import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Switch>
                    <Route path='/profile' render = {() => <Profile
                        state = {props.state.profilePage}
                        addPost = {props.addPost}
                    />} />
                    <Route path='/dialogs' render = {() => <Dialogs state = {props.state.dialogsPage} />} />
                    <Redirect to="/profile"/>
                </Switch>
            </div>
        </div>
    );
};


export default App;
