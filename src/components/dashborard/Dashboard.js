import React,{Component} from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

//Redux
import {connect} from 'react-redux'
import { compose } from 'redux'

//Firestore
import {firestoreConnect} from 'react-redux-firebase'

class Dashboard extends Component {
    state = {
        projects: []
    }
    render() {
        
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">

                        <ProjectList projects={this.props.projects}/>
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
    console.log(state);
    
    return {
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps, null),
    firestoreConnect([
        {collection:'projects'}
    ])
) (Dashboard);