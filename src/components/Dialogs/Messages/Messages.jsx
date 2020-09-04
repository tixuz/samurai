import React from 'react';

import s from "./Messages.module.css"
import Message from "./Message/Message";


const Messages = () => {
    let messagesData = [
        {id: 1, message:'Ho, how are you', likesCount: 12},
        {id: 1, message:'Hi, OK', likesCount: 11},
        {id: 1, message:'Hi, Whatsup', likesCount: 10},
        {id: 1, message:'Ho, well', likesCount: 12},
        {id: 1, message:'Ho, ok', likesCount: 12},
        {id: 1, message:'Ho, glad to see', likesCount: 12},
    ]

    return (
                <div className={s.content}>
                    <h3>Messages</h3>
                    <div>
                        <textarea placeholder="Write it!"></textarea>
                        <button>Submit</button>
                        <button>Clear</button>
                    </div>
                    <div>
                        <Message
                            key={messagesData[0].id}
                            id={messagesData[0].id}
                            message={messagesData[0].message}
                            likesCount={messagesData[0].likesCount}/>
                        <Message
                            key={messagesData[1].id}
                            id={messagesData[1].id}
                            message={messagesData[1].message}
                            likesCount={messagesData[1].likesCount}/>
                    </div>
                </div>

    );
};


export default Messages;
