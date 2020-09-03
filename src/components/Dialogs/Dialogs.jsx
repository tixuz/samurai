import React from 'react';
import s from "./Dialogs.module.css";
import Messages from "./Messages/Messages";


const Dialogs = () => {
    return (
        <div className={s.dialog}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>
                        Dima
                </div>
                <div className={s.dialog}>
                        Andrey
                </div>
                <div className={s.dialog}>
                        Vasya
                </div>
                <div className={s.dialog}>
                        Sveta
                </div>
                <div className={s.dialog}>
                        Yegor
                </div>
            </div>
            <Messages />

        </div>

    );
};


export default Dialogs;
