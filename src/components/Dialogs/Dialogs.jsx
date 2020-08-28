import React from 'react';
import s from "./Dialogs.module.css"
import Messages from "./Messages/Messages";


const Dialogs = () => {
    return (

            <div>
                <h1>Dialogs</h1>
                <div>
                    List of respondents
                </div>
                <div>
                    AVA + DESCR
                </div>
                <Messages/>
            </div>

    );
};


export default Dialogs;
