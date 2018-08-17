import React from 'react'
import Info from './InfoWindow'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps'
const { compose, withProps, withStateHandlers } = require("recompose")

 const Map = compose(withStateHandlers(() => ({
    isOpen: false,
    showInfo: null
  }), 
  
  {onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    }),
    showInfo: ({ showInfo, isOpen }) => (a) => ({
      isOpen: !isOpen,
      showInfoIndex: a
    })
  }),

  withScriptjs,
  withGoogleMap)
  (props => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 50.06465, lng: 19.94498 }}
    >

      {props.venues.map(venue => (
        <Marker
            key={venue.id}
            position={{ lat: venue.location.lat, lng: venue.location.lng }}
            onClick={() => {props.showInfo(venue.id)}}
        >

          {(props.isOpen && props.showInfoIndex === venue.id) &&
            <InfoWindow onCloseClick={props.onToggleOpen}>
              <Info
                venueId={venue.id}
              />
            </InfoWindow>
          }
        </Marker>
      ))}

    </GoogleMap>
    )
  )

export default Map