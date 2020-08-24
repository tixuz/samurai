import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'><img width='75px'
                                            src="https://images.vexels.com/media/users/3/142676/isolated/preview/65b05478c5062b6b1cccee12e0f093b4-house-swirls-icon-by-vexels.png"
                                            alt='logo'/></header>
            <nav className='nav'>
                <div>
                    <a>
                        Profile
                    </a>
                </div>
                <div>
                    <a>
                        Messages
                    </a>
                </div>
                <div>
                    <a>
                        News
                    </a>
                </div>
                <div>
                    <a>
                        Music
                    </a>
                </div>
                <div>
                    <a>
                        Settings
                    </a>
                </div>
            </nav>
            <div className='content'>

                <div>
                    <img src='https://cdn.pixabay.com/photo/2014/04/03/10/25/beach-310419_960_720.png' alt='beach'/>
                </div>
                <div>
                    AVA + DESCR
                </div>
                <div>
                    My Posts
                    <div>
                        new post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default App;
