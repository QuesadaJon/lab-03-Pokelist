import React, { Component } from 'react'
import SearchFunctions from './SearchFunctions.js'
import RenderPokemon from './RenderPokemon.js'
import pokeDex from './pokeData'


export default class PokeDex extends Component {
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
                <div>
                    <SearchFunctions filter={this.state.filter}   handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                    <RenderPokemon filter={this.state.filter} pokeDex={pokeDex}/>
                </div>
            )
        }
}
