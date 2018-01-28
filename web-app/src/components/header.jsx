import React from 'react'
import {Link} from "react-router-dom";

class Header extends React.Component {
    render () {
        return <div>
            <div id="navbar">
                <ul>
                    <li>
                        <Link to='/'>
                            <div>home</div>
                        </Link>
                    </li>
                    {this.props.categories &&
                    this.props.categories.map((category) => {
                        return (
                            <li>
                                <Link to={'/category' + category.path}>
                                    <div>{category.name}</div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    }
}

export default Header;