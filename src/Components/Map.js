import React, {Component} from 'react'
import Info from './InfoWindow'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

class Map extends Component {
    
    render() {

        const MyMapComponent = withScriptjs(withGoogleMap((props) =>
            <GoogleMap
                defaultZoom={12}
                defaultCenter={{ lat: 50.06465, lng: 19.94498 }}
            >
            
            {this.props.venues.map(venue => (
                <Marker
                    key={venue.id}
                    position={{ lat: venue.location.lat, lng: venue.location.lng }}
                    // onClick={() => this.props.showInfoWindow(venue.id)}
                    onClick={() => {this.props.showInfoWindow(venue.id)}}
        
                >
                    {/* {this.props.visibleInfoWindow === venue.id && */}
                    {this.props.isOpen &&
                        <InfoWindow 
                            onCloseClick={this.props.onToggleOpen}
                        >
                            <Info
                                venueId={venue.id}
                            />
                        </InfoWindow>
                    }
                </Marker>
            ))}

            </GoogleMap>
        ))

        return(
            <MyMapComponent
                // isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDziy5R3lKj_zp1jOfiuH-TAncmOqG1MGo&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        )
    }
}

export default Map