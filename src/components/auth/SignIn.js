import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

//Redux
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'
import { HOME } from '../../constants/routes';

class SignIn extends Component {
    state   = {
        email:'',
        password:''
    }

    handleChange = (e) =>{
        console.log(e.target.value);
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e) => {
        console.log('handleSubmit');
        e.preventDefault();
        this.props.signIn(this.state)
    }
    render() {
        const {authError, auth} = this.props;

        if ( auth.uid ) return <Redirect to={HOME} />
        return (
        <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password"  id="password" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                </div>
            </form>
        </div>
        )
    }
}

const  mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, {signIn})(SignIn);
