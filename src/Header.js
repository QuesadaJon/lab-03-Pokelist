import React, { Component } from 'react'
import pokemonSprite from './assets/pokemon-sprite.png'

export default class Header extends Component {
    render() {
        return (
            <div className="header"> 
                <img src={pokemonSprite} alt="pokemon-sprite" style={{ marginRight: 150 }}/>
                Search for Pokémon
            </div>
        )
    }
}
