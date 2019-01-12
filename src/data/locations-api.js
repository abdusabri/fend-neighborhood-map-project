const foursquare = require('react-foursquare')({
    clientID: process.env.REACT_APP_FSQ_ClIENT_ID,
    clientSecret: process.env.REACT_APP_FSQ_CLIENT_SECRET
});

export const getLocationInfo = function (location) {
    return new Promise(function (resolve, reject) {
        foursquare.venues.getVenues(getParams(location))
            .then(res => {
                if (res && res.meta && res.meta.code === 200) {
                    if (res.response && res.response.venues
                        && Array.isArray(res.response.venues)) {
                        getLocationDetails(location, res.response.venues,
                            resolve, reject);
                    } else {
                        reject();
                    }
                } else {
                    reject();
                }
            })
            .catch((err) => reject(err));
    })
}

function getParams(location) {
    return {
        'll': `${location.longitude},${location.latitude}`,
        'intent': 'global',
        'query': location.name
    };
}

function getLocationDetails(location, venues, resolve, reject) {
    const venue = venues.find((venue) => venue.name === location.name);
    foursquare.venues.getVenue({ "venue_id": venue.id })
        .then((res) => {
            if (res && res.meta && res.meta.code === 200) {
                if (res.response && res.response.venue) {
                    resolve(parseVenue(res.response.venue));
                } else {
                    reject();
                }
            } else {
                reject();
            }
        })
        .catch((err) => reject(err));
}

function parseVenue(venue) {
    return {
        url: (venue.shortUrl && venue.shortUrl.length > 0) ?
            venue.shortUrl : 'https://foursquare.com/',
        photo: getPhoto(venue)
    }
}

function getPhoto(venue) {
    let photo = 'https://adcdl6asn.cloudimg.io/width/200/x/';

    if (venue.photos && venue.photos.groups && Array.isArray(venue.photos.groups)
        && venue.photos.groups.length > 0) {
        const groups = venue.photos.groups;
        const items = (groups.length > 1) ? groups[1].items : groups[0].items;
        if (Array.isArray(items) && items.length > 0) {
            photo = `${items[0].prefix}width220${items[0].suffix}`;
        }
    }

    return photo;
}