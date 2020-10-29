import React, { Component } from 'react'

export default class SearchFunctions extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
            <div>
                <label>Filter</label>
                    <input 
                    value={this.props.userInput}
                    onChange={this.props.clickHandle}
                    />
            </div>
                    <button
                    type="submit"
                    >Submit</button>        
            </form>
        )
    }
}
