import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = () => {
    return (
            <div>
                <ProfileInfo img='' name = 'Hindol'/>
                <MyPosts/>
            </div>

    );
};


export default Profile;
