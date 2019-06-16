import React, { Component } from 'react'

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            term: ''
        }
    }

    // arrow function instead of binding this
    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={(e) => this.setState({term: e.target.value})} 
                        />
                    </div>
                </form>
                <h1>{this.state.term}</h1>
            </div>
        )
    }
}

export default SearchBar
