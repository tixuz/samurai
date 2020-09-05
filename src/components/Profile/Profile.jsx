import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    let myprops = props.state;
    return (
            <div>
                <ProfileInfo img='' name = 'Hindol'/>
                <MyPosts props={myprops}/>
            </div>

    );
};


export default Profile;
