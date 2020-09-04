import React from 'react';
import s from "./Dialogs.module.css";
import Messages from "./Messages/Messages";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem"

const Dialogs = (props) => {
    let dialogData = props.props.dialogData;
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
            <Messages props={props.props}/>

        </div>

    );
};


export default Dialogs;
