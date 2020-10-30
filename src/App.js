import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from'./Header.js'
import './App.css';
import PokeDex from './PokeDex.js';
import Splash from './Splash.js';
import FetchPage from './FetchPage'

export default class App extends Component {
      render() {
        return (
          <Router>
              <Header/>
            <div className="main">
              <nav className="nav">
                <ul className="nav-links">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/list">PokeDex</Link>
                  </li>
                  <li>
                    <Link to="/fetch">FetchPage</Link>
                  </li>
                </ul>
              </nav>
              <Switch>
                <Route
                  path="/"
                  exact
                  render={ (routerProps) => <Splash {...routerProps}/>}
                />
                <Route 
                  path="/list"
                  exact
                  render={ (routerProps) => <PokeDex {...routerProps} />}
                />
                <Route 
                path="/fetch"
                exact
                render={ (routerProps) => <FetchPage {...routerProps} />}
                />
              </Switch>
            </div>
          </Router>
        )
  }
}
