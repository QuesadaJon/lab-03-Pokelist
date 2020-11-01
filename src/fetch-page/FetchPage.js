import React, { Component } from 'react'
import request from 'superagent';
import FetchPageSelectors from './FetchPageSelectors.js'
import { Link } from "react-router-dom";

const sleep = (time) => new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve()
    }, time)
});

export default class FetchPage extends Component {
    state = {
        pokeDex: [],
        pokemon: '',
        type: '',
        attribute: '',
        order: '',
        search: 'pokemon'
    }

    componentDidMount = async () => {
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=48`);
        await sleep(6800)
        this.setState({ pokeDex: response.body.results });
    }

    handleClick = async (e) => {
        e.preventDefault();
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.search}=${this.state.pokemon}${this.state.type}${this.state.attribute}${this.state.order}&perPage=48`);
        this.setState({ pokeDex: response.body.results })
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
    
    handleOrder = async (event) => {
        this.setState({ order: event.target.value})
    }

    handleSearch = async (event) => {
        this.setState({ search: event.target.value})
    }
    render() {
        return (
            <>
            <FetchPageSelectors 
            handleClick={this.handleClick} 
            handleChange={this.handleChange} 
            handleSearch={this.handleSearch} 
            handleOrder={this.handleOrder} 
            andleAttribute={this.handleAttribute} 
            handleType={this.handleType}
            />
            <div className="pokemon-body">
                {
                this.state.pokeDex.length === 0
                ? <iframe
                title={Math.random} 
                src="https://giphy.com/embed/26gZ0ohvSHJr2d6Ao"
                width="400" 
                height="530" 
                frameBorder="0" 
                class="giphy-embed"
                style={{ marginBottom: 18 }}
                allowFullScreen/>
                
                : this.state.pokeDex.map(creature => <Link to={`pokemon/${creature.pokemon}`}><div key={creature.pokedex+creature.id} className="pokemon-render">
                    <div className="text-render">{creature.pokemon}</div>
                    <img src={creature.url_image} alt={creature.pokemon} className="pokemon-img"/>
                    <div className="text-render">Type: {creature.type_1}/{creature.type_2}</div>
                    </div></Link>)
                }
            </div>
            </>
        )
    }
}
