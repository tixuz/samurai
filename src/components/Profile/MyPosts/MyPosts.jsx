import React from 'react';

import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import Card from "reactstrap/es/Card";
import CardHeader from "reactstrap/es/CardHeader";
import CardBody from "reactstrap/es/CardBody";


const MyPosts = () => {
    return (
        <div>
            <Card className={s.newPost}>
                <CardHeader><h3>New Post</h3>
                </CardHeader>
                <CardBody>
                    <div>
                        <textarea className='col-12' placeholder="Write it!"></textarea>
                    </div>
                    <button>Submit</button>
                    <button>Clear</button>
                </CardBody>
            </Card>
            <Card className={s.postsBlock}>
                <CardHeader><h3>My Posts</h3>
                </CardHeader>
                <CardBody>
                <Post img="https://themes.2the.me/Messenger-1.1/assets/images/avatars/6.jpg" message='This is a post'
                      likesCount='6'/>
                <Post img="https://themes.2the.me/Messenger-1.1/assets/images/avatars/5.jpg"
                      message="It's a second post" likesCount='5'/>
                </CardBody>
            </Card>
        </div>

    );
};


export default MyPosts;
