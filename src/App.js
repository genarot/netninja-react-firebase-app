import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import './index.css'
//Router
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './components/dashborard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProjects from './components/projects/CreateProjects';
import * as routes from './constants/routes'

//Redux
import store from './store/Store'
import {Provider} from 'react-redux'


class App extends Component {
  state = {
    loadingAuth: true
  }
  componentDidMount() {
    this.unSubscribeAuthStateChanged= store.firebaseAuthIsReady.then(() => {
      this.setState({
        loadingAuth: false
      })
    })
  }
  renderPage = () => {
    if ( !this.state.loadingAuth ) {

      return  (
        <React.Fragment>
          <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
                <Route exact path={routes.HOME} component={Dashboard}/>
                <Route exact path={routes.PROJECT_DETAIL} component={ProjectDetails} />
                <Route exact path={routes.SIGN_IN} component={SignIn} />
                <Route exact path={routes.SIGN_UP} component={SignUp} />
                <Route exact path={routes.PROJECT_CREATE} component={CreateProjects} />
            </Switch>
          </div>
          </BrowserRouter>
        </React.Fragment>
        )
    } else {
      return (
        <div className="App container">
          <div className="row">
            <div className="col s12 m12 px12">
                <div className="card white center">
                  <span className="card-title">Loading Firebase Auth...</span>
                </div>
            </div>
          </div>
        </div>
      )
    }
  }

  componentWillUnmount( ) {
    this.unSubscribeAuthStateChanged()
  }
  render() {
    return (
      <Provider store={store}>
        {
          this.renderPage()
        }
      </Provider>
    );
  }
}

export default App;