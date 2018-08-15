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
                    </ol>
                </div>
            </aside>
        )
    }
}

export default Search