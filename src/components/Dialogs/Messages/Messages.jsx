import React from 'react';

import s from "./Messages.module.css"
import Message from "./Message/Message";


const Messages = () => {
    return (
                <div className={s.content}>
                    <h3>Messages</h3>
                    <div>
                        <textarea placeholder="Write it!"></textarea>
                        <button>Submit</button>
                        <button>Clear</button>
                    </div>
                    <div>
                        <Message message='This is a post' likesCount='6'/>
                        <Message message="It's a post" likesCount='5'/>
                    </div>
                </div>

    );
};


export default Messages;
