import React, { Component } from 'react'
import ReactMapGL, { NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import ResizeObserver from 'resize-observer-polyfill';

const API_KEY = 'pk.eyJ1IjoiYWJkdXNhYnJpIiwiYSI6ImNqbmg0dG9vMzA5YnMzcHRsc3NyYW9pZ3MifQ.GznJS1gglPuQoa-3RGeGeA';

class Map extends Component {
    
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
        new ResizeObserver(this._resize).observe(document.getElementById('map'));
    }

    _resize = () => {
        const map = document.getElementById('map');
        if (!map) {
            return;
        }
        
        this.setState({
            viewport: {
                ...this.state.viewport,
                width: map.offsetWidth - 1, //If set to offsetWidth without subtracting 1, it causes in infinite resizing loop on Chrome
                height: map.offsetHeight
            }
        });
    }

    _updateViewport = (viewport) => {
        this.setState({viewport});
    }

    render() {
        return (
            <div id='map' role='application' aria-label='Map with locations'
                style={{height: '100%'}}>
                <ReactMapGL mapboxApiAccessToken={API_KEY}
                    mapStyle='mapbox://styles/mapbox/streets-v10'
                    {...this.state.viewport}
                    onViewportChange={this._updateViewport}>
                    <div className='nav map-nav-control'>
                        <NavigationControl onViewportChange={this._updateViewport} />
                    </div>
                </ReactMapGL>
            </div>
        )
    };
}

export default Map;