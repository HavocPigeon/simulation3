import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Nav extends Component {
    constructor(){
        super();
        this.state = {
            redirect: false
        }
    }
   
    render() {
        return (
            <div>
                <Link to='/dashboard'><button>Home</button></Link>
                <Link to='/post/:postid'><button>New Post</button></Link>
            </div>
        )
    }
}