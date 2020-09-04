import React from 'react';

import s from "./Messages.module.css"
import Message from "./Message/Message";


const Messages = () => {
    let messagesData = [
        {id: 1, message:'Ho, how are you', likesCount: 12},
        {id: 2, message:'Hi, OK', likesCount: 11},
        {id: 3, message:'Hi, Whatsup', likesCount: 10},
        {id: 4, message:'Ho, well', likesCount: 12},
        {id: 5, message:'Ho, ok', likesCount: 12},
        {id: 6, message:'Ho, glad to see', likesCount: 12},
    ]

    let messageElements = messagesData.map((message, id) => {
        return (<Message
            key={id}
            id={message.id}
            message={message.message}
            likesCount={message.likesCount}/>)
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
