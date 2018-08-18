import React, { Component } from 'react';
import './App.css';
import Map from './Components/Map'
import Header from './Components/Header'
import Search from './Components/Search'
import Footer from './Components/Footer'
import * as FoursquareAPI from './FoursquareAPI'

class App extends Component {

  state = {
    venues: [],
    venueIds: [],
    visibleVenues: [],
    visibleInfoWindow: '',
    isOpen: false,
    showInfo: null
  }

  updateVisibleVenues = (visibleVenues) => {
    this.setState({
      visibleVenues: visibleVenues
    })
  }

  componentDidMount() {
    FoursquareAPI.getAllVenues()
      .then(venues => {
        const venueIds = venues.map(venue => venue.id)
        console.log(venues)
        console.log(venueIds)
        this.setState({
          venues,
          venueIds,
          visibleVenues: venues
        })
      })   
  }

  showInfoWindow = (venue) => {
    console.log(venue)
    this.setState({
      visibleInfoWindow: venue,
      isOpen: true
    })
  }

onToggleOpen = () => {
  this.setState({
    isOpen: true
  })
}

onToggleClose = () => {
  this.setState({
    isOpen: false
  })
}

  render() {
    return (
      <div className="App">
        
        <Header/>

        <main className="main">
          <Map
            venues={this.state.visibleVenues}
            showInfoWindow={this.showInfoWindow}
            showInfo={this.showInfo}
            onToggleOpen={this.onToggleOpen}
            isOpen={this.state.isOpen}
            onToggleClose={this.onToggleClose}
            visibleInfoWindow={this.state.visibleInfoWindow}
          />
          <Search
            venues={this.state.venues}
            visibleVenues={this.state.visibleVenues}
            updateVisibleVenues={this.updateVisibleVenues.bind(this)}
            showInfoWindow={this.showInfoWindow}
          />
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
