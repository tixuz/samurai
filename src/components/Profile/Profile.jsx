import React from 'react';
import s from "./Profile.module.css"


const Profile = () => {
    return (

            <div className={s.content}>

                <div>
                    <img src='https://cdn.pixabay.com/photo/2014/04/03/10/25/beach-310419_960_720.png' alt='beach'/>
                </div>
                <div>
                    AVA + DESCR
                </div>
                <div>
                    My Posts
                    <div>
                        new post
                    </div>
                    <div>
                        <div className={s.item}>
                            post 1
                        </div>
                        <div className={s.item}>
                            post 2
                        </div>
                    </div>
                </div>
            </div>

    );
};


export default Profile;
