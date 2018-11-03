import React from 'react';

import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import {compose}    from 'redux';

const ProjectDetails = (props) => {
    const {id } = props.match.params;
    const {project} = props;
    if ( project ) {

       return ( <div className="container section project-details">
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <span className="card-title">{project.title}</span>
                            <p>{project.content   }</p>
                        </div>
                        <div className="card-action grey lighten-4 grey-text">
                            <div>Posted by {project.authorFirstName} {project.authorLastName }</div>
                            <div>2 de noviembre</div>
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
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;

    return {
        project: projects ? projects[id] : null
    }
}

export default compose(
    connect(mapstateToProps, null),
    firebaseConnect([
        {collection: 'projects'}
    ])
)(ProjectDetails)