import React, { Component } from 'react'
import request from 'superagent'

export default class DetailsPage extends Component {
    state = {
        pokeDex: [],
    }

    componentDidMount = async () => {
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemon}`);
        this.setState({ pokeDex: response.body.results });
    }
    render() {
        return (
            <div className="details-body">
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
                
                : this.state.pokeDex.map(creature => <div key={creature.pokedex+creature.id} className="details-render">
                    <div>
                        <div className="details-creature">{creature.pokemon}</div>
                        <div className="details-pokemon-stats-body">
                            <img src={creature.url_image} alt={creature.pokemon} className="details-img"/>
                            <div className="details-text-body"> 
                                <div>
                                <h1 className="details-stats">Stats</h1>
                                    <div className="details-grid">
                                        <div className="stats-grid">
                                            <div className="stat">Attack:</div>
                                            <div className="stat">Defense:</div>
                                            <div className="stat">Hit-Points:</div>
                                            <div className="stat">Special Attack:</div>
                                            <div className="stat">Special Defense: </div>
                                            <div className="stat">Speed:</div>
                                        </div>
                                        <div className="values-grid"> 
                                            <div className="value">{creature.attack}</div>
                                            <div className="value">{creature.defense}</div>
                                            <div className="value">{creature.hp}</div>
                                            <div className="value">{creature.special_attack}</div>
                                            <div className="value">{creature.special_defense}</div>
                                            <div className="value">{creature.speed}</div>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    <div>Type: {creature.type_1}/{creature.type_2}</div>
                                    <div>Egg Group: {creature.egg_group_1}/{creature.egg_group_2}</div>
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>)
                }
            </div>
        )
    }
}