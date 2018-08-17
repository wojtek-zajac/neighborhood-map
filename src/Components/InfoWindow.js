import React from 'react'

const Info = ({ venueId }) => {
    return (
      <div style={{ padding: `10px` }}>
        <div style={{ fontSize: `16px`, fontColor: `black` }}>
            Some stuff for the venue {venueId}
        </div>
      </div>
    )
}

export default Info