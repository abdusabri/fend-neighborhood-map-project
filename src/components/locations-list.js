import React, { Component } from 'react';

class LocationsList extends Component {

    render() {
        return (
            <article className='locations-list'>
                <input className='form-control form-control-lg' 
                    type='text' placeholder='Filter locations'
                    aria-label='Filter locations'/>
            </article>
        )
    };
}

export default LocationsList;