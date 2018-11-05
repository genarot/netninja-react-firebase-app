import React,{Component} from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import {Redirect} from 'react-router-dom'

//Redux
import {connect} from 'react-redux'
import { compose } from 'redux'

//Firestore
import {firestoreConnect} from 'react-redux-firebase'
import { SIGN_IN } from '../../constants/routes';

class Dashboard extends Component {
    state = {
        projects: []
    }
    render() {
        const {projects, auth} = this.props;
        if ( !auth.uid ) return <Redirect to={SIGN_IN} />
        
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">

                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1 bg-dark"> 
                        <Notifications/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps, null),
    firestoreConnect([
        {collection:'projects'}
    ])
) (Dashboard);