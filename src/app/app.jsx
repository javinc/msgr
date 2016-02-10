import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Main from './Main'; // Our custom react component
import Home from './Home'; // my custom page
import Login from './Login'; // my custom page
import About from './About'; // my custom page
import Repos from './Repos'; // my custom page
import Repo from './Repo'; // my custom page

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            {/* add it here, as a child of `/` */}
            <IndexRoute component={Home}/>

            {/* make them children of `App` */}
            <Route path="repos" component={Repos}>
                <Route path=":userName/:repoName" component={Repo}/>
            </Route>
            <Route path="about" component={About}/>
        </Route>
        <Route path="/login" component={Login}/>
        {/* add the routes here */}
      </Router>
    , document.getElementById('app'));
