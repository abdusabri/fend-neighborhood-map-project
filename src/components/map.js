import React, { Component } from 'react';
import ReactMapGL, { NavigationControl, Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import ResizeObserver from 'resize-observer-polyfill';
import { MdLocationOn } from 'react-icons/md';
import PropTypes from 'prop-types';
import LocationInfo from './location-info';

const API_KEY = 'pk.eyJ1IjoiYWJkdXNhYnJpIiwiYSI6ImNqbmg0dG9vMzA5YnMzcHRsc3NyYW9pZ3MifQ.GznJS1gglPuQoa-3RGeGeA';

class Map extends Component {
    static propTypes = {
        locations: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                latitude: PropTypes.number.isRequired,
                longitude: PropTypes.number.isRequired
            })
        ).isRequired,
        selectedLocation: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired
        }),
        onLocationSelected: PropTypes.func.isRequired,
        onMapLoaded: PropTypes.func.isRequired
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

    handlePopupClose = () => {
        this.props.onLocationSelected(null);
    }

    handleMarkerClick = (location) => {
        this.props.onLocationSelected(location);
    }

    render() {
        return (
            <div id='map' role='application' aria-label='Map with locations'
                style={{height: '100%', width: '100%'}}>

                <ReactMapGL mapboxApiAccessToken={API_KEY}
                    mapStyle='mapbox://styles/mapbox/streets-v10'
                    {...this.state.viewport}
                    onViewportChange={this.updateViewport}
                    onLoad={this.props.onMapLoaded}>

                    {this.props.locations.map((location) => (
                        <Marker key={location.id}
                            longitude={location.longitude}
                            latitude={location.latitude}>
                            <span><MdLocationOn 
                                className={(this.props.selectedLocation &&
                                    this.props.selectedLocation.id === location.id) ?
                                    'map-marker map-marker--selected' : 'map-marker'}
                                onClick={() => (this.handleMarkerClick(location))}/>
                            </span>
                        </Marker>
                    ))}

                    {this.props.selectedLocation && (
                        <Popup tipSize={10}
                            anchor='top'
                            longitude={this.props.selectedLocation.longitude}
                            latitude={this.props.selectedLocation.latitude}
                            onClose={this.handlePopupClose}>
                            {this.props.selectedLocation.name}
                            <LocationInfo location={this.props.selectedLocation}/>
                        </Popup>
                    )}

                    <div className='nav map-nav-control'>
                        <NavigationControl onViewportChange={this.updateViewport} />
                    </div>
                </ReactMapGL>
            </div>
        )
    };
}

export default Map;