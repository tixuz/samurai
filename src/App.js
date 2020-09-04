import React from 'react';
import {Switch,Route,Redirect, BrowserRouter} from 'react-router-dom'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Switch>
                    <Route path='/dialogs' component={Dialogs}/>} />
                    <Route path='/profile' component={Profile}/>
                    <Redirect to="/profile"/>
                </Switch>
            </div>
        </div>
    </BrowserRouter>
    );
};


export default App;
