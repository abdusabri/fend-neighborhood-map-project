import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import escapeRegExp from 'escape-string-regexp';
import * as ElementHelper from '../util/element-helper';

import LOCATIONS from '../data/locations.json';

class LocationsList extends Component {
    static propTypes = {
        onLocationsFiltered: PropTypes.func.isRequired,
        onLocationClicked: PropTypes.func.isRequired
    }

    state = {
        locations: LOCATIONS,
        filterText: ''
    }

    componentDidMount() {
        this.props.onLocationsFiltered(this.state.locations);
    }

    handleTextChange = (e) => {
        this.setState({ filterText: e.target.value });
        this.filterLocationsDebounced(e.target.value);
    }

    filterLocationsDebounced = debounce(this.filterLocations, 200)
    
    filterLocations(filterText) {
        if (filterText.length === 0) {
            this.setState({ locations: LOCATIONS });
            this.props.onLocationsFiltered(LOCATIONS);
        } else {
            const match = new RegExp(escapeRegExp(filterText), 'i');
            const filteredLocations =
                LOCATIONS.filter((location) => match.test(location.name));
            this.setState({ locations: filteredLocations });
            this.props.onLocationsFiltered(filteredLocations);
        }
    }

    componentWillUnmount() {
        this.filterLocationsDebounced.cancel();
    }

    handleLocationClick = (e) => {
        ElementHelper.selectElement('active', e.target.id);
        this.props.onLocationClicked(e.target.value);
    }

    handleLocationKeyUp = (e) => {
        // Enter or Space keys
        if (e.keyCode === 32 || e.keyCode === 13) {
            this.handleLocationClick(e);
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
                    {this.state.locations.map((location) => (
                        <li key={location.id}
                            id={`loc-${location.id}`}
                            value={location.id}
                            className='list-group-item list-group-item-action'
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