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

//Redux
import store from './store/Store'
import {Provider} from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Dashboard}/>
              <Route exact path="/project/:id" component={ProjectDetails} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/create" component={CreateProjects} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
