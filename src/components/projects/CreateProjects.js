import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

//Redux
import {connect} from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { SIGN_IN } from '../../constants/routes';

class CreateProjects extends Component {
    state = {
        title:'',
        content:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.createProject(this.state)
    }

    render() {
        const {project, error, auth} = this.props;
        if ( !auth.uid ) return <Redirect to={SIGN_IN} />

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create new Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea type="text" className="materialize-textarea"  id="content" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
                {project ? <div className="card-panel white-text light-blue">Proyecto Creado con exito</div> : null} 
                {error ? <div className="card-panel white-text red darken-3">{this.props.error.message}</div>: null }
            </div>
        )
    }
}

const mapStateToProps = (state )=>({
    error: state.project.error,
    project: state.project.project,
    auth: state.firebase.auth
})

export default connect(mapStateToProps, {createProject})(CreateProjects);