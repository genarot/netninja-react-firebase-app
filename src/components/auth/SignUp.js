import React, { Component } from 'react'

class SignUp extends Component {
    state   = {
        email:'',
        password:'',
        firstname:'',
        lastname:''
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
    }
    render() {
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
                    <label htmlFor="firstname">Firstname</label>
                    <input type="text" name="firstname" onChange={this.handleChange} id="firstname"/>
                </div>
                <div className="input-field">
                    <label htmlFor="lastname">LastName</label>
                    <input type="text" name="lastname" onChange={this.handleChange} id="lastname"/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                </div>
            </form>
        </div>
        )
    }
}

export default SignUp;
