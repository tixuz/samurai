import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1,
        img: "https://themes.2the.me/Messenger-1.1/assets/images/avatars/6.jpg",
        message: "This is a post",
        likesCount: 5},
    {id: 2,
        img: "https://themes.2the.me/Messenger-1.1/assets/images/avatars/3.jpg",
        message: "It's a second post",
        likesCount: 6},

];

let dialogData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Vasya'},
    {id: 4, name: 'Slava'},
    {id: 5, name: 'Yegor'},
    {id: 6, name: 'Valera'}
];

let messagesData = [
    {id: 1, message: 'Ho, how are you', likesCount: 12},
    {id: 2, message: 'Hi, OK', likesCount: 11},
    {id: 3, message: 'Hi, Whatsup', likesCount: 10},
    {id: 4, message: 'Ho, well', likesCount: 12},
    {id: 5, message: 'Ho, ok', likesCount: 12},
    {id: 6, message: 'Ho, glad to see', likesCount: 12},
];

ReactDOM.render(
  <React.StrictMode>
    <App posts = {posts} dialogData={dialogData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
