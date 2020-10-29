import React, { Component } from 'react'
import Header from'./Header.js'
import SearchFunctions from './SearchFunctions.js'
import RenderPokemon from './RenderPokemon.js'
import pokeData from './pokeData.js'
import './App.css';

export default class App extends Component {
  state = {
    filter: '',
    userInput:''
  }
 
  handleChange = (event) => {
    this.setState({ userInput: event.target.value });
        
      }
      
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ filter: `${this.state.userInput}` });
    console.log(this.state.filter);
  }

      render() {
        return (
          <div className="main">
            <Header/>
            <SearchFunctions filter={this.state.filter} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            <RenderPokemon filter={this.state.filter} pokeData={pokeData}/>
          </div>
        )
  }
}
