import React, {Component} from 'react';
  
  import { connect } from 'react-redux';
  
  import {activateGreet,closeGreet} from '../ducks/redux';
  
  // App.js
  export class Post extends Component {
  
    render() {
      return (
        <div>
  
          <h1>{this.props.Greet.title || 'Hello World!'}</h1>
  
          {this.props.Greet.title ?
            <button onClick={this.props.closeGreet}>
              Exit Greet
            </button> :
            <button onClick={() => this.props.activateGreet({ title: "I'm Here" })}>
              Click Me!
            </button> 
         }
        </div>
      );
    }
  
  }
  
  const mapStateToProps = (state) => ({
    Greet: state.Greet,
  });
  
  const mapDispatchToProps = {
    activateGreet,
    closeGreet,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Post);
  