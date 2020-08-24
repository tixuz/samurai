import React from 'react';
import s from "./Header.module.css"


const Header = () => {
    return (
        <header className={s.header}><img
                                            src="https://images.vexels.com/media/users/3/142676/isolated/preview/65b05478c5062b6b1cccee12e0f093b4-house-swirls-icon-by-vexels.png"
                                            alt='logo'/></header>
          );
};


export default Header;
