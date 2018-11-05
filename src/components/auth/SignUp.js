import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

//Redux
import {connect} from 'react-redux'
import { HOME } from '../../constants/routes';
import {signUp as signUpAction} from '../../store/actions/authActions'

class SignUp extends Component {
    state   = {
        email:'',
        password:'',
        firstName:'',
        lastName:''
    }

    handleChange = (e) =>{
        console.log(e.target.value);
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e) => {
        console.log('handleSubmit');
        
        this.props.signUpAction(this.state)
        e.preventDefault();
    }
    render() {
        const {auth, authError} = this.props;
        if ( auth.uid ) return <Redirect to={HOME} />
        return (
        <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password"  id="password" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="firstName">Firstname</label>
                    <input type="text" name="firstName" onChange={this.handleChange} id="firstName"/>
                </div>
                <div className="input-field">
                    <label htmlFor="lastname">LastName</label>
                    <input type="text" name="lastName" onChange={this.handleChange} id="lastName"/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                </div>
                <div className="red-text center">
                    {authError ? <p>{authError}</p> : null}
                </div>
            </form>
        </div>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

export default connect(mapStateToProps,{signUpAction})(SignUp);
