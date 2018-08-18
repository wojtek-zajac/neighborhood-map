import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class Search extends Component {

    static propTypes = {
        venues: PropTypes.array.isRequired,
        visibleVenues: PropTypes.array.isRequired,
        updateVisibleVenues: PropTypes.func.isRequired
    }

    onFilterChange(query) {
        let showingNames

        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            showingNames = this.props.venues.filter((venue) => match.test(venue.name))
        } else {
            showingNames = this.props.venues
        }

        showingNames.sort(sortBy('name'))

        this.props.updateVisibleVenues(showingNames)
    }

    render() {
        return(
            <aside className="search">
                <div className="search-header">
                    <input 
                        type="text" 
                        placeholder="Search for restaurants" 
                        className="search-input"
                        value={this.showingNames}
                        onChange={(event) => this.onFilterChange(event.target.value)}
                    >
                    </input>
                </div>
                <div className="search-results">
                    <ul className="items-list">
                       {this.props.visibleVenues.map(venue => {
                                return (
                                    <li key={venue.id}
                                        onClick={() => {this.props.showInfoWindow(venue.id)}}
                                    >
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