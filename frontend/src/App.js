import React from 'react'
import Home from './components/Home.js'
import History from './components/History.js'
import Navbar from './components/Navbar.js'
import './css.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/historico" component={History} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
