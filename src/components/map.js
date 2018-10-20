import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import ResizeObserver from 'resize-observer-polyfill';

const API_KEY = 'pk.eyJ1IjoiYWJkdXNhYnJpIiwiYSI6ImNqbmg0dG9vMzA5YnMzcHRsc3NyYW9pZ3MifQ.GznJS1gglPuQoa-3RGeGeA';

class Map extends Component {
    
    state = {
        viewport: {
            latitude: 37.785164,
            longitude: -100,
            zoom: 3.5,
            bearing: 0,
            pitch: 0,
            width: 500,
            height: 500
        }
    }

    componentDidMount() {
        new ResizeObserver(this._resize).observe(document.getElementById('map'));
        this._resize();
    }

    _resize = () => {
        const map = document.getElementById('map');
    
        this.setState({
            viewport: {
                ...this.state.viewport,
                width: map.clientWidth,
                height: map.clientHeight
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
                    onViewportChange={this._updateViewport}/>
            </div>
        )
    };
}

export default Map;