import React, { Component } from 'react';
import './App.css';
import Map2 from './Components/Map2'
import Header from './Components/Header'
import Search from './Components/Search'
import Footer from './Components/Footer'
import * as FoursquareAPI from './FoursquareAPI'

class App extends Component {

  state = {
    venues: [],
    venueIds: [],
    query: '',
    visibleVenues: []
  }

  updateQuery = (query) => {
    this.setState({
        query: query
    })
  }
  // https://stackoverflow.com/questions/40722382/how-to-pass-state-back-to-parent-in-react

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
          venueIds
        })
      })   
  }

  render() {
    return (
      <div className="App">
        
        <Header/>

        <main className="main">
          <Map2
            venues={this.state.venues}
            visibleVenues={this.state.visibleVenues}



            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDziy5R3lKj_zp1jOfiuH-TAncmOqG1MGo&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `600px` }} />}
            mapElement={<div style={{ height: `100%`}} />}

          markers = {this.state.markers}

          />

          <Search
            venues={this.state.venues}
            query={this.state.query}
            updateQuery={this.updateQuery.bind(this)}
            updateVisibleVenues={this.updateVisibleVenues.bind(this)}
          />

        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
