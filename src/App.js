import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/nav/Navbar'
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetail'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        {/* SWITCH only allows one link to be used at a time */}
        <Switch>
          {/* when user goes to '/' or (home), display the Dashboard component */}
          <Route exact path = '/' component={Dashboard} />
          <Route path = '/project/:id' component={ProjectDetails} />
          <Route path = '/signin' component={SignIn} />
          <Route path ='/signup' component={SignUp} />


        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
