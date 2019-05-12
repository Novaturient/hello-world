import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
    return (
        <Menu>
            <a className = "menu-item" href="/">
                Home
            </a>

            <a className = "menu-item" href="/ropel">
                Ropel
            </a>

            <a className = "menu-item" href="/ropeling">
                Ropeling
            </a>
        </Menu>
    );
}


