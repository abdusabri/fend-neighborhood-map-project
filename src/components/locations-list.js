import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import escapeRegExp from 'escape-string-regexp';

import LOCATIONS from '../data/locations.json';

class LocationsList extends Component {
    static propTypes = {
        locations: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                latitude: PropTypes.number.isRequired,
                longitude: PropTypes.number.isRequired
            })
        ),
        onLocationsFiltered: PropTypes.func.isRequired,
        onLocationSelected: PropTypes.func.isRequired,
        selectedLocation: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired
        })
    }

    state = {
        filterText: ''
    }

    componentDidMount() {
        this.props.onLocationsFiltered(LOCATIONS);
    }

    handleTextChange = (e) => {
        this.setState({ filterText: e.target.value });
        this.filterLocationsDebounced(e.target.value);
    }

    filterLocationsDebounced = debounce(this.filterLocations, 200)
    
    filterLocations(filterText) {
        if (filterText.length === 0) {
            this.props.onLocationsFiltered(LOCATIONS);
        } else {
            const match = new RegExp(escapeRegExp(filterText), 'i');
            const filteredLocations =
                this.props.locations.filter((location) => match.test(location.name));
            // Clear selected location if it has been filtered-out 
            if (this.props.selectedLocation && 
                filteredLocations.findIndex((location) => 
                location.id === this.props.selectedLocation.id) === -1) {
                    this.props.onLocationSelected(null);
            }
            this.props.onLocationsFiltered(filteredLocations);
        }
    }

    componentWillUnmount() {
        this.filterLocationsDebounced.cancel();
    }

    handleLocationClick = (e) => {
        this.props.onLocationSelected(this.props.locations.find(
            (location) => location.id === e.target.value));
    }

    handleLocationKeyUp = (e) => {
        // Enter or Space keys
        if (e.keyCode === 32 || e.keyCode === 13) {
            this.props.onLocationSelected(this.props.locations.find(
                (location) => location.id === e.target.value));
        }
    }

    render() {
        return (
            <article className='locations-list'>
                <input className='form-control form-control-lg' 
                    type='text' placeholder='Filter locations'
                    aria-label='Filter locations'
                    onChange={this.handleTextChange}
                    value={this.state.filterText}/>
                <ul className='list-group list-group-flush'>
                    {this.props.locations.map((location) => (
                        <li key={location.id}
                            value={location.id}
                            className={(this.props.selectedLocation &&
                                this.props.selectedLocation.id === location.id) ?
                                'list-group-item list-group-item-action active' :
                                'list-group-item list-group-item-action'}
                            tabIndex='0'
                            onClick={this.handleLocationClick}
                            onKeyUp={this.handleLocationKeyUp}>
                            {location.name}
                        </li>
                    ))}
                </ul>
            </article>
        )
    };
}

export default LocationsList;