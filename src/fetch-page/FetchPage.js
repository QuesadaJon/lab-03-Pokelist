import React, { Component } from 'react'
import FetchPageSelectors from './FetchPageSelectors.js'
import request from 'superagent';
import { Link } from "react-router-dom";
import { getAllPokemon, getPokemon } from '../services/PokemonAPI.js';


export default class FetchPage extends Component {
    state = {
        pokeDex: [],
        pokemon: '',
        type: '',
        attribute: '',
        search: '&pokemon=',
        pageNumber: 1,
    }

    componentDidMount = async () => {
      const response = await getAllPokemon(this.state.pageNumber);
      this.setState({
        pokeDex: response.results,
        count: response.count
      })
    }

    handleClick = async (e) => {
      e.preventDefault();
      // const response = await getPokemon( this.pageNumber, this.search, this.pokemon );
      const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.pageNumber}${this.state.search}${this.state.pokemon}&perPage=24;`)
      console.log(this.state.pokemon, this.state.search, response);
      this.setState({ pokeDex: response.body.results });
  }

    handleChange = async (event) => {
        this.setState({ pokemon: event.target.value})
    }

    handleType = async (event) => {
        this.setState({ type: event.target.value })
    }

    handleAttribute = async (event) => {
        this.setState({ attribute: event.target.value})
    }
    
    handleSearch = async (event) => {
        this.setState({ search: event.target.value})
    }

    handleIncriment = async (e) => {
         await this.setState({ pageNumber: this.state.pageNumber + 1})
         await this.handleClick(e);
    }
    
    handleDecrement = async (e) => {
        await this.setState({ pageNumber: this.state.pageNumber - 1})
        await this.handleClick(e);
   }
    
    render() {
        return (
            <>
            <FetchPageSelectors 
            handleClick={this.handleClick} 
            handleChange={this.handleChange} 
            handleSearch={this.handleSearch} 
            andleAttribute={this.handleAttribute} 
            handleType={this.handleType}
            />
            <div className="pokemon-body">
                {
                this.state.pokeDex.length === 0
                ? <iframe
                key={'loader'}
                title={'Loader'} 
                src="https://giphy.com/embed/26gZ0ohvSHJr2d6Ao"
                width="400" 
                height="530" 
                className="giphy-embed"
                style={{ marginBottom: 18 }}
                allowFullScreen/>
                
                : this.state.pokeDex.map((creature, index) => 
                  <Link to={`pokemon/${creature.pokemon}`}>
                    <div key={index} className="pokemon-render">
                    <div className="text-render">{creature.pokemon}</div>
                    <img src={creature.url_image} alt={creature.pokemon} className="pokemon-img"/>
                    <div className="text-render">Type: {creature.type_1}/{creature.type_2}</div>
                    </div>
                  </Link>
                  )
                }
            </div>
            <div>
                {
                    this.state.pageNumber !== 1 && <button onClick={this.handleDecrement}>Prev</button>
                }                
                {
                    this.state.pokeDex.length === 24 &&
                    <button onClick={this.handleIncriment}>Next</button>
                }
            </div>
            <div>Page: {this.state.pageNumber} out of {Math.ceil(this.state.count / 24)}</div>
            </>
        )
    }
}
