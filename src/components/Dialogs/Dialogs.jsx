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

    let dialogData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Vasya'},
        {id: 4, name: 'Slava'},
        {id: 5, name: 'Yegor'},
        {id: 6, name: 'Valera'}
    ]

    let dialogElements = dialogData.map((dialog, id) => {
        return (<DialogItem
            key={id}
            id={dialog.id}
            name={dialog.name}/>);
    });

    return (
        <div className={s.dialog}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <Messages />

        </div>

    );
};


export default Dialogs;
