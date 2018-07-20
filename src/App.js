import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Auth from './components/Auth';
import Form from './components/Form';
import Post from './components/Post';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
        <Auth />
        <Form />
        <Post />
        <Nav />
      </div>
    );
  }
}

export default App;
