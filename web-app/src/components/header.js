import React, {Component} from 'react';
import {Link} from "react-router-dom";

const Header = ({categories}) => {
    return (
        <ul>
            <li><Link to='/'><span>home</span></Link></li>
            {categories && categories.map((category) => (
                <li><Link to={category.name}><span>{category.name}</span></Link></li>
            ))}
            <li style={{float:'right'}}><Link to='/newpost' ><span>Add Post</span></Link></li>
        </ul>
    );
};


export default Header;