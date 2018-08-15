import React, { Component } from 'react';
import './App.css';
import Map from './Components/Map'
import Header from './Components/Header'
import Search from './Components/Search'
import Footer from './Components/Footer'
import * as FoursquareAPI from './FoursquareAPI'

class App extends Component {

  state = {
    venues: []
  }

  componentDidMount() {
    FoursquareAPI.getAllVenues()
      .then((venues) => {
        console.log(venues)
        this.setState({
          venues: venues
        })
      })
  }

  render() {
    return (
      <div className="App">
        
        <Header/>

        <main className="main">
          <Map/>

          <Search
            venues={this.state.venues}
          />

        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
