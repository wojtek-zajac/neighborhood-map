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



    markers: [
      {"id": "Ancient Roman theatre",
      "position": {lat: 42.146884, lng: 24.751097}
    },
      {"id": "Roman staduim Philipopol",
      "position": {lat: 42.147719, lng: 24.748050}
    },
      {"id": "Old town",
      "position": {lat: 42.151076, lng: 24.752288}
    },
      {"id": "Singin fountaines",
      "position": {lat: 42.140633, lng: 24.745798}
    },
      {"id": "Monument of union",
      "position": {lat: 42.151364, lng: 24.744446}
    }
]




  }

  updateQuery = (query) => {
    this.setState({
        query: query
    })
  }
  // https://stackoverflow.com/questions/40722382/how-to-pass-state-back-to-parent-in-react

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
          />

        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
