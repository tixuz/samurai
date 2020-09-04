import React from 'react';
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <NavLink to={path} className={s.dialogItem}>
        {props.name}
    </NavLink>
    )
}


export default DialogItem;
