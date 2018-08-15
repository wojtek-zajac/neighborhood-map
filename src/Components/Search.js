import React, { Component } from 'react'

class Search extends Component {
    render() {
        return(
            <aside className="search">
                <div className="search-header">
                    <input type="text" placeholder="Search for restaurants"></input>
                </div>
                <div className="search-results">
                    <ol className="items-list">
                        {this.props.venues.map(venue => {
                                return (
                                    <li key={venue.id}>
                                        {venue.name}
                                    </li>
                                )
                            })
                        }
                    </ol>
                </div>
            </aside>
        )
    }
}

export default Search