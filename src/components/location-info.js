import React, { Component } from 'react';
import * as LocationsAPI from '../data/locations-api';
import PropTypes from 'prop-types';
import Loader from './loader';
import ContentError from './content-error';

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
        isLoading: true,
        hasError: false,
        locationInfo: {}
    }

    componentDidMount() {
        this.getLocationInfo(this.props.location);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.id !== this.props.location.id) {
            this.setState({
                locationInfo: {},
                isLoading: true,
                hasError: false
            });
            this.getLocationInfo(this.props.location);
        }
    }

    async getLocationInfo(location) {
        LocationsAPI.getLocationInfo(location)
            .then(res => this.setState({
                locationInfo: res,
                isLoading: false
            }))
            .catch(() => this.setState({
                locationInfo: {},
                isLoading: false,
                hasError: true
            }));
    }

    render() {
        return (
            <section className='location-info'>
                <h3 className='h5 text-primary'>{this.props.location.name}</h3>
                <hr/>
                {this.state.isLoading && <Loader isMain={false}/>}

                {!this.state.isLoading && this.state.hasError &&
                    <ContentError />}

                {!this.state.isLoading && !this.state.hasError &&
                    (<div>
                        <img alt={this.state.locationInfo.name} 
                            src={this.state.locationInfo.photo}/>

                        <div><a href={this.state.locationInfo.url} 
                            target='_new'> View on Foursquare </a></div>
                    </div>
                )}
            </section>
        )
      }
}

export default LocationInfo