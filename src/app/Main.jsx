/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */

import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Dialog from 'material-ui/lib/dialog';
import Colors from 'material-ui/lib/styles/colors';
import FlatButton from 'material-ui/lib/flat-button';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import themeDecorator from 'material-ui/lib/styles/theme-decorator';

import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

import { Link } from 'react-router'

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 0,
  },
};

const muiTheme = getMuiTheme({
  accent1Color: Colors.deepOrange500,
});

class Main extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleLeftButtonTap = this.handleLeftButtonTap.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      open: false,
      menu: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  handleLeftButtonTap() {
      this.setState({
        menu: true,
      });
  }

  handleClose() {
    this.setState({
      menu: false
    });
  }

  render() {
    const standardActions = (
      <div><FlatButton
        label="Okey"
        secondary={true}
        onTouchTap={this.handleRequestClose}
      />
      <FlatButton
        label="Ney"
        secondary={true}
        onTouchTap={this.handleRequestClose}
      /></div>
    );

    return (
      <div style={styles.container}>
        <div>
          <LeftNav
            docked={false}
            width={200}
            open={this.state.menu}
            onRequestChange={open => this.setState({menu})}
          >
            <Link to="/about" onTouchTap={this.handleClose}>
                <MenuItem>About</MenuItem>
            </Link>

            <Link to="/repos" onTouchTap={this.handleClose}>
                <MenuItem>Repos</MenuItem>
            </Link>
          </LeftNav>
        </div>

        <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleLeftButtonTap}
        />

        <Dialog
          open={this.state.open}
          title="Super Secret Password"
          actions={standardActions}
          onRequestClose={this.handleRequestClose}
        >
          1-2-3-4-5-6
        </Dialog>
        <h1>material-ui</h1>
        <h2>X project</h2>
        <RaisedButton
          label="Super Secret Password"
          primary={true}
          onTouchTap={this.handleTouchTap}
        />
      </div>
    );
  }
}

export default themeDecorator(muiTheme)(Main);
