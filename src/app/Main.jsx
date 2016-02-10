import React from 'react';
import { Link } from 'react-router';

import NavLink from './NavLink';

export default React.createClass({
    render() {
        return (
            <div>
                <h1>Main Page</h1>
                <ul>
                    <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/repos">Repos</NavLink></li>
                    <li><NavLink to="/login">Logout</NavLink></li>
                </ul>

                {/* content */}
                {this.props.children}
            </div>
        )
    }
})
