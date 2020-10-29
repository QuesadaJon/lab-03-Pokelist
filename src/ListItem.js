import React, { Component } from 'react'

export default class ListItem extends Component {
    render() {
            return (
                <div className="pokemon-render">
                    <div>{this.props.pokemon}</div>
                    <img src={this.props.url} alt='Pokemon' className='pokemon-img'/>
                    <div>Type: {this.props.type1}/{this.props.type2}</div>

                </div>
            )
    }
}
