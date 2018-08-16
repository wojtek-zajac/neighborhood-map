import React, { Component } from 'react'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps"

class Map extends Component {
    
    state = {
        map: null,
        // markers: [],
        // filteredMarkers: [],
        // locations: []
    }

    componentDidMount() {

        const MapWithAMarker = withScriptjs(withGoogleMap(props =>

            <GoogleMap
                defaultZoom={13}
                defaultCenter={{ lat: 50.06465, lng: 19.94498 }}
            >
                {this.props.venues.map(venue => (
                    <Marker
                        key={venue.id}
                        position={{ lat: venue.location.lat, lng: venue.location.lng }}
                    />
                ))}

            </GoogleMap>
        ))

        const map = <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDziy5R3lKj_zp1jOfiuH-TAncmOqG1MGo&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `600px` }} />}
            mapElement={<div style={{ height: `100%`}} />}
        />

        this.setState({map})
    }

    render() {
        return(
            <div className="map-container">
                {this.state.map}
            </div>
        )
    }
}

export default Map