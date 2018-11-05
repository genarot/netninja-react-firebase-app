import React from 'react';
import {NavLink} from 'react-router-dom'
import { SIGN_UP, SIGN_IN } from '../../constants/routes';

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li>
                <NavLink to={SIGN_UP}>Signup</NavLink>
            </li>
            <li>
                <NavLink to={SIGN_IN}>Login</NavLink>
            </li>
        </ul>
    );
};

export default SignedOutLinks;