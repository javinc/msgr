import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';

import NavLink from './NavLink';

var NavMenu = React.createClass({
    render() {
        return (
            <NavLink {...this.props}>
                <MenuItem>
                    {this.props.children}
                </MenuItem>
            </NavLink>
        )
    }
});

export default React.createClass({
    getInitialState() {
        return {
            navOpen: false
        };
    },

    toogleLeftNav() {
        // toggle
        this.setState({
            navOpen: !this.state.navOpen
        });
    },

    render() {
        return (
            <div>
                <AppBar
                    title="Msgr"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onTitleTouchTap={this.toogleLeftNav}
                    onLeftIconButtonTouchTap={this.toogleLeftNav} />
                <LeftNav
                    docked={false}
                    onRequestChange={this.toogleLeftNav}
                    open={this.state.navOpen}>
                    <AppBar
                        title="Menu"
                        showMenuIconButton={false}
                        onTitleTouchTap={this.toogleLeftNav} />
                    <NavMenu
                        onTouchTap={this.toogleLeftNav}
                        onlyActiveOnIndex
                        to="/">Home</NavMenu>
                    <NavMenu
                        onTouchTap={this.toogleLeftNav}
                        to="/about">About</NavMenu>
                    <NavMenu
                        onTouchTap={this.toogleLeftNav}
                        to="/repos">Repos</NavMenu>
                    <NavMenu
                        onTouchTap={this.toogleLeftNav}
                        to="/login">Logout</NavMenu>
                </LeftNav>

                {/* content */}
                {this.props.children}
            </div>
        )
    }
})
