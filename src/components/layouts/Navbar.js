import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { HOME } from '../../constants/routes';

//Redux
import {connect} from 'react-redux'

const Navbar = (props) => {
    const {auth, profile}  = props;

    const isAuth = (auth.uid);
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to={HOME} className="brand-logo">MarioPlan</Link>
            </div>
            {isAuth ? 
            <SignedInLinks profile={profile}/> :
            <SignedOutLinks />}
       </nav>
    );
};

function mapStateToProps( state ) {
    
    console.log('navbar',state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    } 
}

export default connect(mapStateToProps, null) (Navbar);