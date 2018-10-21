import React, { Component } from 'react';

import LOCATIONS from '../data/locations.json' 

class LocationsList extends Component {

    state = {
        locations: LOCATIONS
    }

    render() {
        return (
            <article className='locations-list'>
                <input className='form-control form-control-lg' 
                    type='text' placeholder='Filter locations'
                    aria-label='Filter locations'/>
                <ul className='list-group list-group-flush'>
                    {this.state.locations.map((location) => (
                        <li key={location.id}
                            className="list-group-item list-group-item-action"
                            tabIndex='0'>
                            {location.name}
                        </li>
                    ))}
                </ul>
            </article>
        )
    };
}

export default LocationsList;