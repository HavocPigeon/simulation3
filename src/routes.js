import {Switch, Route} from 'react-router-dom';
import Auth from './components/Auth.js';
import Dashboard from './components/Dashboard.js';
import Form from './components/Form.js';
import Post from './components/Post.js';
import React from 'react';

export default <Switch>
    <Route exact path='/' component={Auth}/>
    <Route exact path='/dashboard' component={Dashboard}/>
    <Route exact path='/post' component={Post}/>
    <Route exact path='/new' component={Form}/>
</Switch>