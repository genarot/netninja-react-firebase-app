import React from 'react';
import {Redirect}  from 'react-router-dom'

//Redux
import {connect} from 'react-redux'
import {compose}    from 'redux';
//Firebase
import {firestoreConnect} from 'react-redux-firebase'
import { SIGN_IN } from '../../constants/routes';
import moment from 'moment';

const ProjectDetails = (props)=>{
        const {project, auth} = props;

        if ( !auth.uid ) return <Redirect to={SIGN_IN}></Redirect>

        if ( project ) {

            return ( <div className="container section project-details">
                        <div className="card z-depth-0">
                            <div className="card-content">
                                <span className="card-title">{project.title}</span>
                                <p>{ project.content }</p>
                            </div>
                            <div className="card-action grey lighten-4 grey-text">
                                <div>Posted by {project.authorFirstName} {project.authorLastName }</div>
                                <div>{moment(project.createdAt.toDate()).zone('America/Managua').calendar()}</div>
                            </div>
                        </div>
                    </div>  )
        } else {

            return (
                <div className="container center">
                    <p>Loading Project...</p>
                </div>
            );
        }
};

const mapstateToProps = ( state, ownProps ) => {
    console.log('state',state);
    const id        = ownProps.match.params.id;
    const projects  = state.firestore.data.projects;
    console.log(projects);
    const project   = projects ?  projects[id] : null;
    
    return {
        project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapstateToProps, null),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetails)