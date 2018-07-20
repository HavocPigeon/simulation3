import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import * as Actions from '../ducks/reducer';

export class Post extends Component {
    render() {
        const {count, dispatch} = this.props;
        const actions = bindActionCreators(Actions, dispatch);
        return (
            <div className='cont'>
                <div>
                    <h1>Counter</h1>
                </div>
                <p>{count}</p>
                <button className='inc' onClick={actions.increment}></button>
                <button className='dec' onClick={actions.decrement}></button>
            </div>
        )
    }
}
export default connect(state => state)(Post);