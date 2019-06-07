import React, { Component } from 'react';
import NavBar from './NavBar/NavBar'
// import ApplicationViews from './ApplicationViews'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          {/* <ApplicationViews /> */}
        </React.Fragment>
      </Router>
    )
  }
}

export default App;

