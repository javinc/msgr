import React from 'react';

import NavLink from './NavLink';

export default React.createClass({
    render() {
        return (
            <section>
                <h1>Repos Page</h1>
                <ul>
                    <li><NavLink to="/repos/james/puto">Repo 1</NavLink></li>
                    <li><NavLink to="/repos/james/goryo">Repo 2</NavLink></li>
                </ul>

                {this.props.children}
            </section>
        )
    }
})
