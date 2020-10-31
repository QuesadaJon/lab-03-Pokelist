import React, { Component } from 'react'

export default class FetchPageSelectors extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleClick}>
                    <select onChange={this.props.handleSearch}>
                        <option value="">Search By</option>
                        <option value="pokemon">pokemon</option>
                        <option value="ability_1">ability</option>
                        <option value="egg_group_1">egg group</option>
                        <option value="shape">shape</option>
                    </select>
                    <input onChange={this.props.handleChange}/>
                    <select onChange={this.props.handleOrder}>
                        <option value=''>Order</option>
                        <option value="&direction=asc">ascending</option>
                        <option value="&direction=desc">descending</option> 
                    </select>
                    <select onChange={this.props.handleAttribute}>
                        <option value="">Stat</option>
                        <option value="&sort=attack">attack</option>
                        <option value="&sort=defense">defense</option>
                        <option value="&sort=special_attack">special attack</option>
                        <option value="&sort=special_defense">special defense</option>
                        <option value="&sort=speed">speed</option>
                    </select>
                    <select onChange={this.props.handleType}>
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
        )
    }
}
