import React,{Component} from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

//Redux
import {connect} from 'react-redux'

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
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps, null)(Dashboard);