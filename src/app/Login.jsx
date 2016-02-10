import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import Paper from 'material-ui/lib/paper';

import NavLink from './NavLink';

const style = {
  width: 500,
  margin: 20,
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: 20,
  textAlign: 'center',
  display: 'block',
};

export default React.createClass({
    render() {
        return (
            <div className="container">
                <Paper style={style} zDepth={1}>
                    <h1>Login Page</h1>

                    <TextField
                        hintText="Hint Text"
                        floatingLabelText="Username"
                    /><br/>
                    <TextField
                        hintText="Password Field"
                        floatingLabelText="Password"
                        type="password"
                    /><br/>

                    <NavLink to="/">
                        <RaisedButton label="Login" primary={true} />
                    </NavLink>
                </Paper>
            </div>
        )
    }
})
