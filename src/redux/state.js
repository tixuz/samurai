
let posts = [
    {id: 1,
        message: "This is a post",
        likesCount: 5},
    {id: 2,
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

let state= {
    profilePage: {
    posts: posts},
    dialogsPage: {
        dialogData: dialogData,
        messagesData: messagesData
    }
}

export let addPost = (postMessage) => {
    alert(postMessage);
    let countPosts = state.profilePage.posts.length;
    let newPost = {
        id: countPosts + 1,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    alert(state.profilePage.posts);
    debugger;
}

export default state
