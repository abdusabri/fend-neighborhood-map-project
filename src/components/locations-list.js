import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LocationsList extends Component {
    static propTypes = {
        locations: PropTypes.array.isRequired
    }

    render() {
        return (
            <article className='locations-list'>
                <input className='form-control form-control-lg' 
                    type='text' placeholder='Filter locations'
                    aria-label='Filter locations'/>
                <ul className='list-group list-group-flush'>
                    {this.props.locations.map((location) => (
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