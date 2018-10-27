import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';
import React, { Component } from 'react';
import Header from './components/header';
import Sidebar from 'react-sidebar';
import { MdMenu } from 'react-icons/md';
import Map from './components/map';
import LocationsList from './components/locations-list';
import Loader from './components/loader';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

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
    isMapLoaded: false,
    initialRender: true
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

  handleLocationSelected = (location, history) => {
    if (!location && !this.state.selectedLocation) {
      return;
    }

    let shouldUpdate = false;

    if (!location && this.state.selectedLocation) {
      shouldUpdate = true;
    } else {
      if (!this.state.selectedLocation || 
        this.state.selectedLocation.id !== location.id) {
          shouldUpdate = true;
      }
    }

    if (shouldUpdate) {
      this.setState({ selectedLocation : null });
      this.setState({ selectedLocation : location });

      const path = (location) ? '/' + location.id : '/';
      if (this.state.initialRender) {
        history.push(path);
        this.setState({ initialRender: false });
      } else {
        if (history.action !== 'POP') {
          history.push(path);
        }
      }
    }
  }

  render() {
    return (
      <div>
        <Header />
        
        {!this.state.isMapLoaded && <Loader isMain={true} />}

        {!this.state.sidebarDocked && this.state.isMapLoaded && (
          <button type='button'
                  className='btn btn-link menu-link' onClick={this.toggleOpen}>
              <MdMenu />
          </button>
        )}

        <main>
          <BrowserRouter>
            <Switch>
              <Route exact path='(/[1-2]?)' render={({ history }) => 
                <Sidebar
                  open={this.state.sidebarOpen}
                  docked={this.state.sidebarDocked}
                  onSetOpen={this.onSetSidebarOpen}
                  styles={sidebarStyle}
                  sidebar={<LocationsList 
                    locations={this.state.locations}
                    onLocationsFiltered={this.handleLocationsFiltered}
                    onLocationSelected={(location) => 
                      this.handleLocationSelected(location, history)}
                    selectedLocation={this.state.selectedLocation}/>}>
                    <Map locations={this.state.locations}
                        selectedLocation={this.state.selectedLocation}
                        onLocationSelected={this.handleLocationSelected}
                        onMapLoaded={() => this.setState({ isMapLoaded: true })} 
                        history={history}/>
                  </Sidebar>
              }/>
              <Redirect from='*' to='/' />
            </Switch>
          </BrowserRouter>
        </main>
      </div>
    );
  }
}

export default App;
