import React from 'react';
import { Link } from 'react-router';

import NavLink from './NavLink';

export default React.createClass({
    render() {
        return (
            <div>
                <h1>Main Page</h1>
                <ul>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/repos">Repos</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </ul>

                {/* add this */}
                {this.props.children}
            </div>
        )
    }
})
