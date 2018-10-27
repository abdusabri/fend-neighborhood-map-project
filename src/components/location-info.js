import React, { Component } from 'react';
import * as LocationsAPI from '../data/locations-api';
import PropTypes from 'prop-types';
import { MdError } from 'react-icons/md';
import Loader from './loader';

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
        isError: false,
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
                isError: false
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
            .catch((err) => this.setState({
                locationInfo: {},
                isLoading: false,
                isError: true
            }));
    }

    render() {
        return (
            <section className='location-info'>
                <h3 className='h5 text-primary'>{this.props.location.name}</h3>
                <hr/>
                {this.state.isLoading && <Loader isMain={false}/>}

                {!this.state.isLoading && this.state.isError &&
                    (<div className='location-loader-container container-error'>
                        <MdError className='error-icon text-warning'/>
                        <div className='alert alert-warning alert-no-border text-center' role='alert'>
                            Oops! <br/> Something is not right :(
                        </div>
                    </div>
                )}

                {!this.state.isLoading && !this.state.isError &&
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