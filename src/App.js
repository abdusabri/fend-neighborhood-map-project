import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';
import React, { Component } from 'react';
import Header from './components/header';
import Sidebar from 'react-sidebar';
import { MdMenu } from 'react-icons/md';
import Map from './components/map';
import LocationsList from './components/locations-list'

const sidebarMediaQuery = window.matchMedia(`(min-width: 650px)`);
const sidebarStyle = {
  sidebar: {
    top: 56,
    zIndex: 3
  },
  content: {
    top: 56
  },
  overlay: {
    top: 56
  }
}

class App extends Component {

  state = {
    sidebarDocked: sidebarMediaQuery.matches,
    sidebarOpen: false,
    locations: [],
    selectedLocation: null,
    isMapLoaded: false
  }

  componentDidMount() {
    sidebarMediaQuery.addListener(this.mediaQueryChanged);
  }

  mediaQueryChanged = () => {
    this.setState({ sidebarDocked: sidebarMediaQuery.matches, 
      sidebarOpen: false });
  }

  onSetSidebarOpen = (open) => {
    this.setState({ sidebarOpen: open });
  }

  toggleOpen = (e) => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });

    if (e) {
      e.preventDefault();
    }
  }

  handleLocationsFiltered = (filteredLocations) => {
    this.setState({ locations: filteredLocations });
  }

  handleLocationSelected = (location) => {
    this.setState({ selectedLocation : location });
  }

  render() {
    return (
      <div>
        <Header />
        
        {!this.state.isMapLoaded && 
          (<div className='loader-container'>
            <div className='loader'></div>
          </div>
        )}

        {!this.state.sidebarDocked && this.state.isMapLoaded && (
          <button type='button'
                  className='btn btn-link menu-link' onClick={this.toggleOpen}>
              <MdMenu />
          </button>
        )}

        <main>
          <Sidebar
            open={this.state.sidebarOpen}
            docked={this.state.sidebarDocked}
            onSetOpen={this.onSetSidebarOpen}
            styles={sidebarStyle}
            sidebar={<LocationsList 
              locations={this.state.locations}
              onLocationsFiltered={this.handleLocationsFiltered}
              onLocationSelected={this.handleLocationSelected}
              selectedLocation={this.state.selectedLocation}/>}>
              <Map locations={this.state.locations}
                selectedLocation={this.state.selectedLocation}
                onLocationSelected={this.handleLocationSelected}
                onMapLoaded={() => this.setState({ isMapLoaded: true })}/>
          </Sidebar>
        </main>
      </div>
    );
  }
}

export default App;
