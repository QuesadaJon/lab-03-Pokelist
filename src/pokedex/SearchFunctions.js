import React, { Component } from 'react'
import Dropdown from './Dropdown.js'

export default class SearchFunctions extends Component {
    render() {
        return (
            <div className="search-function">
                <form onSubmit={this.props.handleSubmit}>
                    <label>Filter</label>
                        <input 
                        onChange={this.props.handleChange} 
                        />
                    <button>Submit</button>        
                </form>
                <Dropdown/>
            </div>
        )
    }
}
