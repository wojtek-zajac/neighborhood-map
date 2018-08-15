import React, { Component } from 'react'
import logo from '../logo.svg';

class Header extends Component {
    render() {
        return(
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Kraków</h1>
                <button className="toggle-search-button"></button>
            </header>
        )
    }
}

export default Header