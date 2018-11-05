import React from 'react';
import {NavLink} from 'react-router-dom'
import { PROJECT_CREATE, HOME } from '../../constants/routes';

//Redux 
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li>
                <NavLink to={PROJECT_CREATE}>New Product</NavLink>
            </li>
            <li>
                <a onClick={props.signOut}>Log Out</a>
            </li>
            <li>
                <NavLink to={HOME} className="btn btn-floating pink lighten-1">
                {props.profile.initials}
                </NavLink>
            </li>
        </ul>
    );
};



export default connect(null, {signOut}) (SignedInLinks);