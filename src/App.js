import React, { Component } from 'react'
import Header from'./Header.js'
import SearchFunctions from './SearchFunctions.js'
import RenderPokemon from './RenderPokemon.js'
import pokeData from './pokeData.js'
import './App.css';

export default class App extends Component {
  state = {
    filter: '',
    userInput: ''
  }
 
  clickHandle = (event) => {
    this.setState({
        filter: event.target.value
        });
  }
  
  handleSubmit = (event) => {
    alert(`You have applied ${this.state.userInput} as a filter`)
    this.setState({
      userInput: `${this.state.filter}`
    })
  }

      render() {
        return (
          <div className="main">
            <Header/>
            <SearchFunctions clickHandle={this.clickHandle} filter={this.state.filter} handleSubmit={this.handleSubmit}/>
            <div>{this.state.filter}</div>
            <RenderPokemon filter={this.state.filter} pokeData={pokeData}/>
          </div>
        )
  }
}
