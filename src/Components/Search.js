import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class Search extends Component {

    static propTypes = {
        venues: PropTypes.array.isRequired,
        query: PropTypes.string.isRequired,
     // handleSearchInput: PropTypes.func.isRequired
    }

    state = {
        name: ''
    }

    updateQuery = (query) => {
    this.setState({
        name: query.trim()
    })
  }

    render() {

        let showingNames
        if (this.state.name) {
            const match = new RegExp(escapeRegExp(this.state.name), 'i')
            showingNames = this.props.venues.filter((venue) => match.test(venue.name))
        } else {
            showingNames = this.props.venues
        }

        this.props.venues.sort(sortBy('name'))

        return(
            <aside className="search">
                <div className="search-header">
                    <input 
                        type="text" 
                        placeholder="Search for restaurants" 
                        className="search-input"
                        value={this.state.name}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    >
                    </input>
                    {JSON.stringify(this.state)}
                </div>
                <div className="search-results">
                    <ul className="items-list">
                        {showingNames.map(venue => {
                                return (
                                    <li key={venue.id}>
                                        {venue.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </aside>
        )
    }
}

export default Search