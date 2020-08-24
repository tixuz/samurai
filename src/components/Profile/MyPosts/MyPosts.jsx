import React from 'react';

import s from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts = () => {
    return (
                <div className={s.content}>
                    <h3>My Posts</h3>
                    <div>
                        new post
                    </div>
                    <div>
                        <Post/>
                        <Post/>
                    </div>
                </div>

    );
};


export default MyPosts;
