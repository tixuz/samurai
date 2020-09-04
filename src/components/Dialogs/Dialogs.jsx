import React from 'react';
import s from "./Dialogs.module.css";
import Messages from "./Messages/Messages";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <NavLink to={path} className={s.dialog}>
        {props.name}
    </NavLink>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialog}>
            <div className={s.dialogItems}>
                <DialogItem id="1" name="Dima"/>
                <DialogItem id="2" name="Andrey"/>
                <DialogItem id="3" name="Vasya"/>
                <DialogItem id="4" name="Slava"/>
                <DialogItem id="5" name="Yegor"/>
                <DialogItem id="6" name="Valera"/>
            </div>
            <Messages />

        </div>

    );
};


export default Dialogs;
