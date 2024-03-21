import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
    return ( <
        Router >

        <
        Switch >

        <
        Route exact path = "/"
        component = { Home } >
        < /Route> <
        Route path = "/login"
        component = { Login } >
        < /Route> <
        Route path = "/signup"
        component = { Signup } > < /Route>

        <
        /Switch>  <
        /Router>
    );
};

export default App;