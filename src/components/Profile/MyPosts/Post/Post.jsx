import React from 'react';
import s from "./Post.module.css"


const Post = (props) => {
    return (
                        <div className={s.item}>
                         <img alt="" src='https://bonskies25.files.wordpress.com/2009/08/avatar.jpg' />
                            {props.message}
                            <div><span>like</span></div>
                        </div>

    );
};


export default Post;