import React from 'react';

import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import Card from "reactstrap/es/Card";
import CardHeader from "reactstrap/es/CardHeader";
import CardBody from "reactstrap/es/CardBody";

const MyPosts = (props) => {
    let myprops = props.props;

    let posts = myprops.posts;

    let postsElemens = posts.map((p, id) =>{
        return(
            <Post key = {id} img={p.id} message={p.message}
                  likesCount={p.likesCount}/>
        )})

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
                    {postsElemens}
                </CardBody>
            </Card>
        </div>

    );
};


export default MyPosts;
