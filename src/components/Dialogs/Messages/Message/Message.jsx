import React from 'react';
import s from "./Message.module.css"


const Message = (props) => {
    return (
                        <div className={s.item}>
                         <img alt="" src='https://bonskies25.files.wordpress.com/2009/08/avatar.jpg' />
                            {props.message}
                            <div><span>{props.likesCount} likes</span></div>
                        </div>

    );
};


export default Message;
