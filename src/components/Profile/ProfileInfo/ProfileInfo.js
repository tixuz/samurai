import React from "react";
import s from "./ProfileInfo.module.css"
const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2014/04/03/10/25/beach-310419_960_720.png' alt='beach'/>
            </div>
            <div className={s.descriptionInfo}>
                AVA + DESCR
            </div>
        </div>
    );
};

export default ProfileInfo;