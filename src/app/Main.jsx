import React from 'react';
import { Link } from 'react-router';

import NavLink from './NavLink';

export default React.createClass({
    render() {
        return (
            <div>
                <h1>Main Page</h1>
                <ul role="nav">
                    <li><Link to="/about"
                        activeClassName="active">About</Link></li>
                    <li><Link to="/repos"
                        activeClassName="active">Repos</Link></li>
                    <li><Link to="/login"
                        activeClassName="active">Login</Link></li>
                </ul>

                {/* add this */}
                {this.props.children}
            </div>
        )
    }
})
