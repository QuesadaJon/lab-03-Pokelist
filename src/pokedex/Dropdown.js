import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <div>
                <select>
                    <option value='ascending'>Ascending</option>
                    <option value='descending'>Descending</option>
                </select>
                <select>
                    <option value='attack'>Attack</option>
                    <option value='defense'>Defense</option>
                    <option value='type'>Type</option>
                </select>
            </div>
        )
    }
}
