import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from'./Header.js'
import './App.css';
import PokeDex from './pokedex/PokeDex.js';
import Splash from './Splash.js';
import FetchPage from './fetch-page/FetchPage.js'
import Footer from './Footer.js'
import DetailsPage from './fetch-page/DetailsPage.js'

export default class App extends Component {
    render() {
      return (
        <Router>
          <div className="main">
            <div className="body-header">
              <Header />
              <nav>
                <ul className="nav-links">
                  <li>
                    <Link style={{ textDecoration: 'none' }} to="/">Home</Link>
                  </li>
                  <li>
                    <Link style={{ textDecoration: 'none' }} to="/list">PokeDex</Link>
                  </li>
                  <li>
                    <Link style={{ textDecoration: 'none' }} to="/fetch">FetchPage</Link>
                  </li>
                </ul>
              </nav>
            </div>
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
                <Route
                  path="/pokemon/:pokemon"
                  exact
                  render={ (renderProps) => <DetailsPage {...renderProps} />}
                />
              </Switch>
            </div>
          <Footer/>
        </Router>
    )
  }
}
