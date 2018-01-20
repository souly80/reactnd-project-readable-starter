import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/category'>Category</Link></li>
                <li><Link to='/modify'>Modify</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;