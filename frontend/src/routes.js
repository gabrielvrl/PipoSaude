import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/Login';
import SignUp from './components/SignUp'
import Home from './components/Home'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/home" component={Home} />
        </BrowserRouter>
    );
}