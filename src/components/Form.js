import React from 'react';
import {Link, Route} from 'react-router-dom';
import Formone from './Formone';

const Form = ({match}) => {
    return (
        <div>
            <Link to={`${match.url}/form1`}>Form1</Link>
            <Link to={`${match.url}/form2`}>Form2</Link>
            <Route path={`${match.path}/:form1`} component={Formone}/>
        </div>
    )
}
export default Form;