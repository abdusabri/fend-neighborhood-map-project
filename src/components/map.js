import React, { Component } from 'react';
import ReactMapGL, { NavigationControl, Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import ResizeObserver from 'resize-observer-polyfill';
import { MdLocationOn } from 'react-icons/md';
import PropTypes from 'prop-types';

const API_KEY = 'pk.eyJ1IjoiYWJkdXNhYnJpIiwiYSI6ImNqbmg0dG9vMzA5YnMzcHRsc3NyYW9pZ3MifQ.GznJS1gglPuQoa-3RGeGeA';

class Map extends Component {
    static propTypes = {
        locations: PropTypes.array.isRequired
    }
    
    state = {
        viewport: {
            latitude: 52.529,
            longitude: 13.435,
            zoom: 10.12,
            bearing: 0,
            pitch: 0,
            width: 500,
            height: 500
        }
    }

    componentDidMount() {
        new ResizeObserver(this.resize).observe(document.getElementById('map'));
    }

    resize = () => {
        const map = document.getElementById('map');
        if (!map) {
            return;
        }
        
        this.setState({
            viewport: {
                ...this.state.viewport,
                width: map.offsetWidth,
                height: map.offsetHeight
            }
        });
    }

    updateViewport = (viewport) => {
        this.setState({viewport});
    }

    render() {
        return (
            <div id='map' role='application' aria-label='Map with locations'
                style={{height: '100%', width: '100%'}}>
                <ReactMapGL mapboxApiAccessToken={API_KEY}
                    mapStyle='mapbox://styles/mapbox/streets-v10'
                    {...this.state.viewport}
                    onViewportChange={this.updateViewport}>

                    {this.props.locations.map((location) => (
                        <Marker key={location.id}
                            longitude={location.longitude}
                            latitude={location.latitude}>
                            <span><MdLocationOn className='map-marker'/></span>
                        </Marker>
                    ))}

                    <div className='nav map-nav-control'>
                        <NavigationControl onViewportChange={this.updateViewport} />
                    </div>
                </ReactMapGL>
            </div>
        )
    };
}

export default Map;