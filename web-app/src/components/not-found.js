import React, {Component} from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>Not Found URL</h1>
            <Link to="/">go home</Link>
        </div>
    );
};

export default NotFound;
