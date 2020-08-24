import React from 'react';

import s from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts = () => {
    return (
                <div className={s.content}>
                    <h3>My Posts</h3>
                    <div>
                        <textarea placeholder="Write it!"></textarea>
                        <button>Submit</button>
                        <button>Clear</button>
                    </div>
                    <div>
                        <Post message='This is a post'/>
                        <Post message="It's a post"/>
                    </div>
                </div>

    );
};


export default MyPosts;
