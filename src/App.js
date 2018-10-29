import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';
import React, { Component } from 'react';
import Header from './components/header';
import Sidebar from 'react-sidebar';
import { MdMenu } from 'react-icons/md';
import Map from './components/map';
import LocationsList from './components/locations-list';
import Loader from './components/loader';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

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
  constructor(props) {
    super(props);
    this.routeRef = React.createRef(); 
  }

  state = {
    sidebarDocked: sidebarMediaQuery.matches,
    sidebarOpen: false,
    locations: [],
    selectedLocation: null,
    isMapLoading: true,
    initialRender: true
  }

  componentDidMount() {
    sidebarMediaQuery.addListener(this.mediaQueryChanged);
    
    if (this.routeRef.current) {
      this.routeRef.current.context.router.history
        .listen((location, action) => {
          if (action === 'POP') {
            this.setSelectedLocationBasedOnPath(location);
          }
      });
    }
  }

  componentDidUpdate() {
    if (this.state.initialRender === true) {
      this.setState({initialRender: false});
      this.setSelectedLocationBasedOnPath(
        this.routeRef.current.context.router.history.location);
    }
  }

  setSelectedLocationBasedOnPath = (location) => {
    const strLocId = location.pathname.substr(1);
    if (strLocId && strLocId.length > 0) {
      const locationId = parseInt(strLocId);
      const targetLocation = this.state.locations.find(
        (location) => location.id === locationId);
      if (targetLocation) {
        this.handleLocationSelected(targetLocation, false);
      } else {
        this.handleLocationSelected(null, true);
      }    
    } else {
      this.handleLocationSelected(null, false);
    }
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

  handleLocationSelected = (location, pushToHistory=true) => {
    if (JSON.stringify(location) !== 
      JSON.stringify(this.state.selectedLocation)) {
        this.setState({ selectedLocation : null });
        this.setState({ selectedLocation : location });
        
        if (pushToHistory) {
          this.routeRef.current.context.router.history
            .push((location) ? '/' + location.id : '/');
        }
    }
  }

  render() {
    return (
      <div>
        <Header />
        
        {this.state.isMapLoading && <Loader isMain={true} />}

        {!this.state.sidebarDocked && !this.state.isMapLoading && (
          <button type='button'
                  className='btn btn-link menu-link' onClick={this.toggleOpen}>
              <MdMenu />
          </button>
        )}

        <main>
          <BrowserRouter>
            <Switch>
              <Route ref={this.routeRef} exact path='(/[1-2]?)' render={() => 
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
                        onMapLoaded={() => this.setState({ isMapLoading: false })} />
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
