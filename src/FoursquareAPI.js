export const getAllVenues = () =>
    fetch(`https://api.foursquare.com/v2/venues/search?ll=50.06465,19.94498&&query=restaurant&intent=checkin&client_id=OETCS0J3AWPZKPR2402EJKNKFMD1KOFE3MIVDBDYB2BQ3QTU&client_secret=MRVDTPZJ4TEIXV3RLGXKM32YMNXNTMO20ISBLJV2XGCCVHW2&v=20180815&v=20180815`)
    .then(response => response.json())
    .then(data => data.response.venues)
    .catch(error => {
        console.error(error);
    })








export const getVenueDetails = (venueId)=> {
    let getUrl = `https://api.foursquare.com/v2/venues/${venueId}?&oauth_token=F0WIMK0BV1XLO3GFZVX3FJHOFMZMWBJC02ZJ4OO0AVD2TK1B&v=20180816`;
 
    return fetch(getUrl)
            .then(response => response.json())
            .then(data => data.response.venues)
            .catch(error => {
                console.error(error);
            })
}