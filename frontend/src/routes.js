import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header'
import Login from './components/Login';
import SignUp from './components/SignUp'
import Home from './components/Home'
import Footer from './components/Footer'

export default function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Route path="/" exact component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/home" component={Home} />
            <Footer />
        </BrowserRouter>
    );
}