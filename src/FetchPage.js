import React, { Component } from 'react'
import request from 'superagent';

const sleep = (time) => new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve()
    }, time)
});
export default class FetchPage extends Component {
    state = {
        pokeDex: []
    }
    componentDidMount = async () => {
        const response = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
        await sleep(6800)
        this.setState({ pokeDex: response.body });
    }
    render() {
        return (
            <div>
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
                : this.state.pokeDex.map(creature => 
                    <div>
                        <p>
                            {}
                        </p>
                    </div>)
                }
            </div>
        )
    }
}
