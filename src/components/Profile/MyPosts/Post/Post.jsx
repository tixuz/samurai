import React from 'react';
import s from "./Post.module.css";
import {Badge, Button, Card, CardText, CardBody, CardFooter} from "reactstrap";

const Post = (props) => {
    return (
        <Card>
            <CardBody className='dark'>
                <CardText>
                    <blockquote className="blockquote mb-0">
                        <p>                    {props.message}
                        </p>
                        <footer className="blockquote-footer"><Button outline className="float-right">
                            Likes <Badge color="secondary">{props.likesCount}</Badge>
                        </Button>
                        </footer>
                    </blockquote>
                </CardText>
            </CardBody>
        </Card>
    );
};


export default Post;