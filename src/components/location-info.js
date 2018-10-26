import React, { Component } from 'react';
import * as LocationsAPI from '../data/locations-api';
import PropTypes from 'prop-types';

class LocationInfo extends Component {
    static propTypes = {
        location: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired
        }).isRequired
    }

    state = {
        locationInfo: {}
    }

    componentDidMount() {
        this.getLocationInfo(this.props.location);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.id !== this.props.location.id) {
            this.setState({locationInfo:''});
            this.getLocationInfo(this.props.location);
        }
    }

    async getLocationInfo(location) {
        LocationsAPI.getLocationInfo(location)
            .then(res => this.setState({locationInfo:res}))
            .catch((err) => this.setState({locationInfo:err}));
    }

    render() {
        return (
            <div>
                <div><img alt={this.state.locationInfo.name} src={this.state.locationInfo.photo}/></div>
                <div><a href={this.state.locationInfo.url} target='_new'> View on Foursquare </a></div>
            </div>
        )
      }
}

export default LocationInfo