import React, { Component } from 'react'
import request from 'superagent';

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
        order: ''
    }

    componentDidMount = async () => {
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex`);
        // await sleep(6800)
        this.setState({ pokeDex: response.body.results });
    }

    handleClick = async (e) => {
        e.preventDefault();
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.pokemon}${this.state.type}${this.state.attribute}${this.state.order}&perPage=50`);
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
    render() {
        return (
            <>
                <form onSubmit={this.handleClick}>
                    <select>
                        <option></option>
                    </select>
                    <input onChange={this.handleChange}/>
                    <select onChange={this.handleOrder}>
                        <option value=''>Order</option>
                        <option value="&direction=asc">ascending</option>
                        <option value="&direction=desc">descending</option> 
                    </select>
                    <select onChange={this.handleAttribute}>
                        <option value="">Stat</option>
                        <option value="&sort=attack">attack</option>
                        <option value="&sort=defense">defense</option>
                        <option value="&sort=special_attack">special attack</option>
                        <option value="&sort=special_defense">special defense</option>
                        <option value="&sort=speed">speed</option>
                    </select>
                    <select onChange={this.handleType}>
                        <option value="">Type</option>
                        <option value="&type=bug">bug</option>
                        <option value="&type=dark">dark</option>
                        <option value="&type=dragon">dragon</option>
                        <option value="&type=electric">electric</option>
                        <option value="&type=fairy">fairy</option>
                        <option value="&type=fighting">fighting</option>
                        <option value="&type=fire">fire</option>
                        <option value="&type=flying">flying</option>
                        <option value="&type=ghost">ghost</option>
                        <option value="&type=grass">grass</option>
                        <option value="&type=ground">ground</option>
                        <option value="&type=ice">ice</option>
                        <option value="&type=normal">normal</option>
                        <option value="&type=poison">poison</option>
                        <option value="&type=psychic">psychic</option>
                        <option value="&type=rock">rock</option>
                        <option value="&type=steel">steel</option>
                        <option value="&type=water">water</option>
                    </select>
                    <button>Search</button>
                </form>
            <div className="pokemon-body">
                {
                this.state.pokeDex.length === 0
                ? <iframe
                title={Math.random} 
                src="https://giphy.com/embed/26gZ0ohvSHJr2d6Ao"
                width="314" 
                height="480" 
                frameBorder="0" 
                class="giphy-embed"
                allowFullScreen/>
                : this.state.pokeDex.map(creature => <div key={creature._id} className="pokemon-render">
                    <div>{creature.pokemon}</div>
                    <img src={creature.url_image} alt={creature.pokemon} className="pokemon-img"/>
                    <div>{creature.type_1}/{creature.type_2}</div>
                    </div>)
                }
            </div>
            </>
        )
    }
}
