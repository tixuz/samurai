import React from 'react';

import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import Card from "reactstrap/es/Card";
import CardHeader from "reactstrap/es/CardHeader";
import CardBody from "reactstrap/es/CardBody";

const MyPosts = (props) => {
    let myprops = props.state;

    let posts = myprops.posts;
    // alert(JSON.stringify(posts));
    let postsElements = posts.map((p, id) =>{
        return(
            <Post key = {id} message={p.message}
                  likesCount={p.likesCount}/>
        )});

    let newPostElement = React.createRef();

    let addPost = () => {

        let text = newPostElement.current.value;
        // alert(text);
        // debugger;
        props.addPost(text);
    }


    return (
        <div>
            <Card className={s.newPost}>
                <CardHeader><h3>New Post</h3>
                </CardHeader>
                <CardBody>
                    <div>
                        <textarea  ref={newPostElement} className='col-12' placeholder="Write it!"></textarea>
                    </div>
                    <button onClick={addPost}>Submit</button>
                    <button>Clear</button>
                </CardBody>
            </Card>
            <Card className={s.postsBlock}>
                <CardHeader><h3>My Posts</h3>
                </CardHeader>
                <CardBody>
                    {postsElements}
                </CardBody>
            </Card>
        </div>

    );
};


export default MyPosts;
