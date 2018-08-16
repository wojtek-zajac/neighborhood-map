import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class Search extends Component {

    static propTypes = {
        venues: PropTypes.array.isRequired,
        query: PropTypes.string.isRequired,
        updateQuery: PropTypes.func.isRequired
    }

    render() {

        let showingNames
        if (this.props.query) {
            const match = new RegExp(escapeRegExp(this.props.query), 'i')
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
                        value={this.props.query}
                        onChange={(event) => this.props.updateQuery(event.target.value)}
                    >
                    </input>
                    {JSON.stringify(`App query state: ${this.props.query}`)}
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