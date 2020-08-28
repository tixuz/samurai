import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (

            <div>

                <div>
                    <img src='https://cdn.pixabay.com/photo/2014/04/03/10/25/beach-310419_960_720.png' alt='beach'/>
                </div>
                <div>
                    AVA + DESCR
                </div>
                <MyPosts/>
            </div>

    );
};


export default Profile;
