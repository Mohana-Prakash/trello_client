import React from 'react';

import Chat from './components/chat/Chat';
import Login from "./components/login/login"
import Menu from './components/menu/Menu'
import SignUp from './components/signUp/SignUp'
import FrontPage from './components/frontPage/FrontPage'

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
        <Route path="/" exact component={FrontPage}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/dashboard/:id" component={Menu}/>
        <Route path="/chat" component={Chat}/>
        <Route path="/signup" component={SignUp}/>
    </Router>
  );
}

export default App;
