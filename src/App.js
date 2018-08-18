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
    console.log('yes')
    this.setState({
      visibleInfoWindow: venue
    })
  }

  showInfo = (showInfo, isOpen) => (i) => ({  
    isOpen: !isOpen,
    showInfoIndex: i
  })
  
  onToggleOpen = ({ isOpen }) => () => ({
    isOpen: !isOpen,
  })


  render() {
    return (
      <div className="App">
        
        <Header/>

        <main className="main">

          <Map
            venues={this.state.visibleVenues}
            // visibleVenues={this.state.visibleVenues}
            // markers = {this.state.markers}
            showInfoWindow={this.showInfoWindow}

            showInfo={this.showInfo}
            onToggleOpen={this.onToggleOpen}
            isOpen={this.state.isOpen}
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
