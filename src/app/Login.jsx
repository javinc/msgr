import React from 'react';

import NavLink from './NavLink';

export default React.createClass({
    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <NavLink to="/">Login</NavLink>
            </div>
        )
    }
})
