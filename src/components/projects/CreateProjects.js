import React, { Component } from 'react'

//Redux
import {connect} from 'react-redux';
import { createProject } from '../../store/actions/projectActions';

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
            {this.props.error ? <div className="card-panel white-text red darken-3">{this.props.error.message}</div>: null }
        </div>
        )
    }
}

const mapStateToProps = (state )=>({
    error: state.project.error
})

export default connect(mapStateToProps, {createProject})(CreateProjects);