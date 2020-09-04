import React from 'react';

import s from "./Messages.module.css";
import Message from "./Message/Message";


const Messages = (props) => {
    let messagesData = props.props.messagesData;

    let messageElements = messagesData.map((message, id) => {
        return (<Message
            key={id}
            id={message.id}
            message={message.message}
            likesCount={message.likesCount}/>);
    });

    return (
        <div className={s.content}>
            <h3>Messages</h3>
            <div>
                <textarea placeholder="Write it!"></textarea>
                <button>Submit</button>
                <button>Clear</button>
            </div>
            <div>
                {messageElements}
            </div>
        </div>

    );
};


export default Messages;
