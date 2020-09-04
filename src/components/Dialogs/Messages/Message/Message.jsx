import React from 'react';
import s from "./Message.module.css";
import Card from "reactstrap/es/Card";
import Media from "reactstrap/es/Media";


const Message = (props) => {
    return (
        <div className={s.item} id={props.id}>
            <img object alt="" src='https://bonskies25.files.wordpress.com/2009/08/avatar.jpg'/>
            <div>
            <div body>{props.message}
            </div>
            </div>
            <div>
            <div bottom>
                <span>{props.likesCount} likes</span>
            </div>
            </div>
        </div>

    );
};


export default Message;
